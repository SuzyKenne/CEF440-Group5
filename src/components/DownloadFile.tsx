import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from "react-native";
import RNFetchBlob from "rn-fetch-blob";

interface DownloadFileProps {
  url: string;
  filename: string;
}

const DownloadFile: React.FC<DownloadFileProps> = ({ url, filename }) => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async () => {
    try {
      setDownloading(true);

      if (Platform.OS === "android") {
        const rationale = {
          title: "Storage Permission Required",
          message: "This app needs access to your storage to download files.",
          buttonPositive: "OK",
        };

        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          rationale
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Error", "Storage permission not granted");
          return;
        }
      }

      const { config, fs } = RNFetchBlob;
      const downloadDirPath = `${fs.dirs.DownloadDir}/${filename}`;

      await config({
        fileCache: true,
        path: downloadDirPath,
      }).fetch("GET", url);

      Alert.alert("Success", "File downloaded successfully");
    } catch (error) {
      Alert.alert("Error", "Error downloading file");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, downloading ? styles.disabledButton : {}]}
        onPress={downloadFile}
        disabled={downloading}
      >
        <Text style={styles.buttonText}>
          {downloading ? "Downloading..." : "Download File"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default DownloadFile;
