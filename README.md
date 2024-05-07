 
<h1>SafeDrive</h1>

## Drowsiness Detection System and Fleet Management Dashboard
### Overview

This project combines an IoT-based drowsiness detection system with a Fleet Management Dashboard for comprehensive monitoring and control. The system utilizes facial landmarks and blink analysis to detect drowsiness, integrates an ESP32 model for wireless control, and includes additional hardware components for enhanced functionality.

## IoT Integration
- `ESP32 Model`: Enables wireless control and monitoring of the drowsiness detection system.
- `GPS Tracker`: Provides real-time vehicle location tracking.
- `GSM Module`: Facilitates communication capabilities for the system.
- `Buzzer`: Alerts the driver with sounds in case of drowsiness detection.
- `IR Sensor`: Detects when the user is wearing glasses for additional context analysis.

## Fleet Management Dashboard
- Access the dashboard by navigating to the provided URL after deployment.
- Features include:
  - Live Vehicle Locations: Track and visualize vehicle locations in real-time on a map.
  - Statistics Section: Analyze key metrics such as haptic mechanism activation and user activity.
  - Remote Control: Manage system functionalities wirelessly via the dashboard.

## ML Integration

### Installation

1. Clone this repository to your local machine. <br>
2. Install the required dependencies: <br>
a) OpenCV (`pip install opencv-python`) <br>
b) NumPy (`pip install numpy`) <br>
c) dlib (`pip install dlib`) <br>
d) imutils (`pip install imutils`) <br>
e) firebase-admin (`pip install firebase-admin`) <br>
3. Download the `shape_predictor_68_face_landmarks.dat` file for facial landmark detection.<br>

### File Structure
- drowsiness_detection.py: Main script for drowsiness detection. <br>
- firebase.json: Firebase credentials file.  <br>
- shape_predictor_68_face_landmarks.dat: Pre-trained facial landmark detection model. <br>
- Other necessary files and libraries. <br>

### Results
The system categorizes the person's status into three categories:<br>
- Active: When the person is alert and active.<br>
- Drowsy: When the person shows signs of drowsiness based on blink patterns.<br>
- Sleeping: When the person is detected as sleeping due to prolonged drowsiness.<br>
