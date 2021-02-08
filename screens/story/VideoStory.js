import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import constants from "../../Constants";
import Loader from "../../components/Loader";
import { TouchableOpacity, Platform, Text } from "react-native";
import styles from "../../styles";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.View``;

const Button = styled.View`
  width: 80;
  height: 80;
  border-radius: 40px;
  border: 10px solid ${styles.lightGreyColor};
`;

export default ({ navigation }) => {
  
  if (navigation) {
    const cameraRef = useRef();
 
  const [video, setVideo] = useState(null);
  const [uri, setUri] = useState(null);
  const [type, setType] = useState(null);
  const [recording, setRecording] = useState(false);
  const [showCamera, setsShowCamera] = useState(false);
  const [loading, setLoading] = useState(true);

  const _saveVideo = async () => {
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log(asset)
    if (asset) {
      navigation.navigate("StoryUpload", { type: type, story: asset, uri });
      setVideo(null)
    }
  };

  const _StopRecord = async () => {
    setRecording(false)
    cameraRef.current.stopRecording();
  }
  const _StartRecord = async () => {
    // if (cameraRef) {
    setRecording(true)
    const { uri, codec = "mp4" } = await cameraRef.current.recordAsync();
    console.log(uri)
    setUri(uri)
    setType(codec)
    // setVideo(svideo)
    // }
  }
  const pushVideo = () => {
     
      _StartRecord();
    
  };

    const pullVideo = () => {
    
      _StopRecord();
    
  };

  const _showCamera = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status === "granted") {
        setsShowCamera(true);
      }
    } catch (e) {
      console.log(e);
      setsShowCamera(false);
    } finally {
      setLoading(false);
    }
    };
    


  useEffect(() => {
    _showCamera();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : showCamera ? (
        <>
          <Camera
            ref={cameraRef}
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              flex: 1,
              width: "100%"
            }}
          >
            {uri && (
              <TouchableOpacity
                onPress={_saveVideo}
                style={{
                  padding: 20,
                  width: "100%",
                  backgroundColor: "#fff"
                }}
              >
                <Text style={{ textAlign: "center" }}>save</Text>
              </TouchableOpacity>
            )}
              <TouchableOpacity
                onLongPress={pushVideo} delayLongPress={200}
                onPressOut={pullVideo}
              //onPress={toogleRecord}
              // style={{
              //   padding: 20,
              //   width: "100%",
              //   backgroundColor: recording ? "#ef4f84" : "#4fef97"
              // }}
            >
              {/* <Text style={{ textAlign: "center" }}>
                {recording ? "Stop" : "Record"}
              </Text> */}
                <Button />
            </TouchableOpacity>
          </Camera>
          {/* <View>
            <TouchableOpacity onPress={takePhoto} disabled={!canTakePhoto}>
              <Button />
            </TouchableOpacity>
          </View> */}
           
          </>
          
          
      ) : null}
    </View>
  )
  }
  else {
    return null;
  }
  
}