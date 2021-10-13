import RNFetchBlob from 'rn-fetch-blob';
import {
  PermissionsAndroid,
  Platform,
} from 'react-native';

export const downloadFileAsync = async (details,downloadSucessCb, downloadFailedCb) => {
    
  // Function to check the platform
  // If iOS then start downloading
  // If Android then ask for permission

  if (Platform.OS === 'ios') {
    downloadFile(details,downloadSucessCb, downloadFailedCb);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message:
            'App needs access to your storage to download Files',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
        downloadFile(details,downloadSucessCb, downloadFailedCb);
      } else {
        downloadFailedCb('Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.warn(err);
      downloadFailedCb(err)
    }
  }
};

const getExtention = filename => {
  // To get the file extension
  return /[.]/.exec(filename) ?
           /[^.]+$/.exec(filename) : undefined;
};

const downloadFile = (details,downloadSucessCb, downloadFailedCb) => {
  
  // To add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let fileURL = details.fileURL;    
  // Getting the extention of the file
  let ext = getExtention(fileURL);
  ext = '.' + ext[0];
  // Get config and fs from RNFetchBlob
  // config: To pass the downloading related options
  // fs: Directory path where we want our file to download
  const { config, fs } = RNFetchBlob;
  let downloadPath = fs.dirs.DownloadDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      // Related to the Android only
      useDownloadManager: true,
      notification: true,
      path:
        downloadPath +'/'+
        details.attachment_name + 
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: details.attachment_name,
    },
  };
  config(options)
    .fetch('GET', fileURL)
    .then(res => {
      // Showing alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      // alert('File Downloaded Successfully.');
      downloadSucessCb();
    })
    .catch(e => {console.log("Something Went Wrong",e);downloadFailedCb(e);});
};
