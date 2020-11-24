import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
}

export const Spaceship: FunctionComponent<Props> = ({ size = 30 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 1659 1660" fill="none">
      <Path
        d="M333.5 1106c0 55.23-40.742 58.5-91 58.5S147 1177.23 147 1122c0-55.23 45.242-116 95.5-116s91 44.77 91 100zM648 1430c0 55.23-40.742 58.5-91 58.5s-95.5 12.73-95.5-42.5c0-55.23 45.242-116 95.5-116s91 44.77 91 100z"
        fill="#fff"
      />
      <Path
        d="M644.684 1404.45c19.471 66.83 8.419 100.6-28.686 124.71-27.398 17.81-61.489 20.5-85.554 41.55 5.177-18.59 10.944-29.96 22.613-43.13-46.778 4.12-96.102 25.25-133.941 61.42 0 0-23.775-87.35 20.593-139.01-14.68 5.12-32.805 18.43-38.209 33.4-4.162-24.54 2.288-198.96 172.438-149.69-59.731 18.48-97.19 86.55-85.746 146.73 8.087-12.87 51.362-47.76 84.379-49.09-33.085 24.31-36.651 45.01-36.651 45.01s19.013-13.13 46.657-17.96c25.245-4.41 48.199-12.93 62.107-53.94zM331.419 1081.36c19.471 66.83 8.419 100.6-28.686 124.72-27.398 17.8-61.489 20.49-85.554 41.55 5.177-18.59 10.944-29.97 22.613-43.13-46.778 4.11-96.102 25.24-133.941 61.41 0 0-23.775-87.34 20.593-139-14.68 5.11-32.805 18.42-38.209 33.39-4.161-24.54 2.289-198.958 172.439-149.69-59.732 18.48-97.191 86.55-85.747 146.73 8.087-12.87 51.362-47.76 84.379-49.08-33.084 24.3-36.65 45-36.65 45s19.012-13.13 46.657-17.96c25.244-4.41 48.198-12.92 62.106-53.94zM1387.44 472.165l-200.45-200.449c-6.06 4.381-11.17 8.139-14.99 11.284l204.16 204.158c3.48-3.483 7.22-9.243 11.28-14.993z"
        fill="#F02A2A"
      />
      <Path
        d="M1276.33 383.676l-102.49-102.489a54.426 54.426 0 00-4.16 4.16L510.487 944.536l204.146 204.144 659.187-659.188a53.875 53.875 0 004.16-4.159l-101.65-101.657zM1407.76 251.568c-42.07-42.069-176.49-10.15-220.76 20.432l200.33 200.327c29.91-45.605 62.5-178.691 20.43-220.759zM1119.56 748.083c-1.2 1.194-2.39 2.389-3.25 3.242L615.636 1252l106.649 106.65 500.335-500.335s1.88-1.877 3.24-3.243l-106.3-106.989z"
        fill="#fff"
      />
      <Path
        d="M794.493 1286.44l-106.649-106.65-13.143 13.15 106.648 106.65 13.144-13.15z"
        fill="#F02A2A"
      />
      <Path
        d="M736.593 1344.34l-106.648-106.65-11.147 11.15 106.648 106.65 11.147-11.15z"
        fill="#000"
      />
      <Path
        d="M1257.12 718.194c-33.65-33.656-107.22 9.622-137.8 32.124L1225 856c22.5-30.58 65.61-104.317 32.12-137.806zM725.945 1354.99l-106.648-106.65-82.523 2.33 186.676 186.68 2.495-82.36z"
        fill="#fff"
      />
      <Path
        d="M723.45 1437.35l-186.676-186.68-23.626 23.63 186.676 186.67 23.626-23.62z"
        fill="#757575"
      />
      <Path
        d="M804 433.733l-3.239 3.238-500.078 500.078L407.331 1043.7l499.738-499.74 3.238-3.238L804 433.733z"
        fill="#fff"
      />
      <Path
        d="M466.229 984.467l13.144-13.144-53.325-53.324-53.324-53.324-13.144 13.144 106.649 106.648z"
        fill="#F02A2A"
      />
      <Path
        d="M421.473 1029.22L314.825 922.574l-11.147 11.147 106.648 106.649 11.147-11.15z"
        fill="#000"
      />
      <Path
        d="M941.405 402.476c-33.276-33.276-106.482 9.983-136.929 32.444l104.485 104.485c22.628-30.281 65.553-103.82 32.444-136.929zM410.825 1039.87L304.177 933.223l-82.524 2.329 186.843 186.838 2.329-82.52z"
        fill="#fff"
      />
      <Path
        d="M408.33 1122.23L221.654 935.552l-23.626 23.626 186.676 186.672 23.626-23.62zM783.347 1021.07l406.293-406.295a270.86 270.86 0 0080.2-180.021 43.202 43.202 0 00-2.8-17.686 43.15 43.15 0 00-9.76-15.017 43.009 43.009 0 00-15.01-9.752 43.096 43.096 0 00-17.69-2.8 270.821 270.821 0 00-180.02 80.194L638.265 875.988l-118.461 33.941-52.576 52.576L696.83 1192.11l52.576-52.58 33.941-118.46z"
        fill="#757575"
      />
      <Path
        d="M797.156 1009.59L649.412 861.847l-13.144 13.143 147.744 147.74 13.144-13.14zM749.405 1139.53L519.637 909.763 637.1 876.488 782.015 1021.4l-32.61 118.13zM703.651 1139.37L519.803 955.518l-56.07 56.072 91.924 91.92 91.924 91.92 56.07-56.06z"
        fill="#757575"
      />
      <Path
        d="M749.405 1139.53L519.637 909.763l-54.572 54.572L694.834 1194.1l54.571-54.57z"
        fill="#000"
      />
      <Path
        d="M1093.97 644.021c43.01 0 77.88-34.869 77.88-77.882 0-43.013-34.87-77.882-77.88-77.882-43.02 0-77.89 34.869-77.89 77.882 0 43.013 34.87 77.882 77.89 77.882z"
        fill="#105BD8"
      />
      <Path
        d="M1086.77 605.228l26.1-26.375-34.09 8.627-6.22-6.223 7.99-33.304-25.53 25.526-12.94-12.94 49.5-49.497 11.53 11.525-11.17 45.962 45.53-11.596 11.53 11.526-49.36 49.639-12.87-12.87z"
        fill="#fff"
      />
    </Svg>
  );
};