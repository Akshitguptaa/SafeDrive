# SafeDrive

## Drowsiness Detection System
### ML script

This project implements a drowsiness detection system using facial landmarks and blink analysis. The system detects whether a person is awake, drowsy, or asleep based on their facial movements, specifically analyzing blink patterns.

### Installation

1. Clone this repository to your local machine. <br>
2. Install the required dependencies: <br>
a) OpenCV (pip install opencv-python) <br>
b) NumPy (pip install numpy) <br>
c) dlib (pip install dlib) <br>
d) imutils (pip install imutils) <br>
e) firebase-admin (pip install firebase-admin) <br>
3. Download the shape_predictor_68_face_landmarks.dat file for facial landmark detection.<br>

### File Structure
1. drowsiness_detection.py: Main script for drowsiness detection. <br>
2. firebase.json: Firebase credentials file.  <br>
3. shape_predictor_68_face_landmarks.dat: Pre-trained facial landmark detection model. <br>
4. Other necessary files and libraries. <br>

### Results
The system categorizes the person's status into three categories:<br>
Active: When the person is alert and active.<br>
Drowsy: When the person shows signs of drowsiness based on blink patterns.<br>
Sleeping: When the person is detected as sleeping due to prolonged drowsiness.<br>
