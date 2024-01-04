import React from "react";
import styles from "./header.module.scss";
import { Box, Button, Typography } from "@mui/material";

const Header = ({ setOpenForm }) => {
  return (
    <header>
      <div>
        <svg
          width="150"
          height="32"
          viewBox="0 0 150 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M146.8 0.649414C142.286 0.649414 138.398 2.29393 135.181 5.4576L135.178 5.45995L135.176 5.46171C132.005 8.6328 130.416 12.5258 130.416 17.034V27.9435C130.416 28.7906 130.714 29.6078 131.355 30.202C131.949 30.8445 132.767 31.1433 133.615 31.1433C134.423 31.1433 135.231 30.8444 135.825 30.202C136.451 29.6236 136.815 28.824 136.815 27.9435V17.034C136.815 14.2549 137.762 11.9389 139.707 9.99363C141.707 7.99354 144.021 7.05018 146.8 7.05018C147.656 7.05018 148.425 6.69355 149.038 6.14151L149.066 6.11632L149.091 6.08825C149.643 5.47489 150 4.70661 150 3.85036C150 2.9941 149.663 2.1814 149.066 1.58442L149.052 1.57068L149.038 1.55811C148.425 1.0061 147.656 0.649414 146.8 0.649414ZM13.9538 0.752983C10.1144 0.752983 6.79217 2.13775 4.08837 4.84135C1.38474 7.54498 0 10.8657 0 14.6558V27.9434C0 28.8382 0.350391 29.6773 0.985898 30.3129C1.63834 30.9653 2.48387 31.2467 3.30333 31.2467C4.16395 31.2467 5.01925 30.9653 5.67169 30.3129C6.32413 29.6604 6.60666 28.804 6.60666 27.9434V14.6558C6.60666 12.6666 7.34213 10.9597 8.77475 9.52709L8.77876 9.52351L8.78278 9.51892C10.2092 8.04496 11.8982 7.35941 13.9542 7.35941C16.0105 7.35941 17.6457 8.03878 19.1339 9.52691C20.5609 10.9539 21.2499 12.6549 21.2499 14.6556V27.9942C21.2499 28.8504 21.6003 29.6766 22.2358 30.3122C22.8713 30.9477 23.697 31.2975 24.5533 31.2975C25.4481 31.2975 26.2872 30.9477 26.9227 30.3122C27.5752 29.6597 27.8566 28.8033 27.8566 27.9427V14.6554C27.8566 10.8653 26.475 7.54914 23.8259 4.84621L23.8233 4.84358L23.8209 4.84123C21.114 2.13424 17.7445 0.752867 13.9544 0.752867L13.9538 0.752983ZM76.1158 1.21818C73.3175 1.21818 70.7521 1.86904 68.5165 3.17741C68.5159 3.1777 68.5147 3.17829 68.5141 3.17888C66.2364 4.48217 64.4779 6.29576 63.2316 8.57183C61.9781 10.8609 61.3857 13.4708 61.3857 16.3103C61.3857 19.1001 61.9791 21.7147 63.29 24.0086C64.5911 26.2857 66.3995 28.0926 68.6768 29.3937C70.9592 30.6979 73.5254 31.3506 76.3739 31.3506C80.2429 31.3506 83.5575 30.1429 86.1717 27.692L86.1802 27.684L86.1888 27.676C86.7082 27.1566 87.0191 26.4802 87.0191 25.7717C87.0191 24.8418 86.5134 24.0321 85.8037 23.3816L85.7774 23.3575L85.7499 23.3358C85.2214 22.9394 84.5993 22.727 83.9743 22.727C83.1544 22.727 82.3475 23.0569 81.63 23.595L81.6117 23.6088L81.5945 23.6242C80.3018 24.7322 78.5834 25.2602 76.3738 25.2602C74.6736 25.2602 73.2106 24.8782 71.9318 24.1203C70.6437 23.357 69.6587 22.3261 68.9409 20.9864C68.2323 19.6638 67.8886 18.0786 67.8886 16.3104C67.8886 13.5518 68.6609 11.3803 70.1757 9.77075C71.7071 8.14366 73.5929 7.308 76.1156 7.308C77.3125 7.308 78.3513 7.54491 79.3125 7.92942C80.2355 8.29858 81.0775 8.89972 81.9012 9.77192L81.8714 9.73873C82.5091 10.5038 83.4327 10.9278 84.4395 10.9278C84.9728 10.9278 85.5469 10.7885 86.0456 10.4323C86.8853 9.83249 87.4842 8.96544 87.4842 7.93457C87.4842 7.22606 87.18 6.63509 86.8239 6.16019L86.8078 6.13901L86.7912 6.12014C83.9833 2.8802 80.3325 1.21878 76.1158 1.21878L76.1158 1.21818ZM108.09 1.21818C103.985 1.21818 100.361 2.75714 97.4497 5.66808C94.5387 8.57915 93.0511 12.1608 93.0511 16.3099C93.0511 20.4589 94.5385 24.0407 97.4497 26.9516C100.364 29.8658 103.991 31.3503 108.09 31.3503C111.339 31.3503 114.28 30.3724 116.851 28.5196C116.927 29.2291 117.178 29.9055 117.723 30.4101C118.317 31.052 119.135 31.3503 119.982 31.3503C120.802 31.3503 121.613 31.0508 122.248 30.4153C122.826 29.8371 123.182 29.0442 123.182 28.1493V16.3099C123.182 12.163 121.694 8.57878 118.732 5.66814C115.824 2.76022 112.245 1.21818 108.09 1.21818ZM36.2662 1.42589C35.4056 1.42589 34.6141 1.69444 34.0524 2.25617C33.4907 2.81791 33.273 3.5636 33.273 4.26289C33.273 5.1577 33.6231 5.97646 34.2155 6.68731L34.2172 6.68995L42.3682 16.323L34.7323 25.8805C34.732 25.8808 34.7314 25.8802 34.7308 25.8805C34.1239 26.6093 33.8416 27.4338 33.8416 28.2529C33.8416 28.993 34.0586 29.7505 34.6203 30.3122C35.1609 30.8528 35.9221 31.1425 36.7827 31.1425C37.6775 31.1425 38.5391 30.7807 39.1757 30.0805L39.1911 30.0627L46.4649 20.9098L54.1217 30.0578L54.0913 30.0194C54.645 30.7807 55.5566 31.1426 56.5335 31.1426C57.3529 31.1426 58.1341 30.8741 58.6958 30.3124C59.2152 29.793 59.5782 29.0729 59.5782 28.253C59.5782 27.3968 59.2375 26.5935 58.6695 25.9625L50.8355 16.6007L58.2954 6.86798L58.2971 6.86564C58.8352 6.14819 59.1646 5.30195 59.1646 4.36682C59.1646 3.58682 58.8743 2.8486 58.3338 2.30804C57.8144 1.78864 57.0792 1.42572 56.2229 1.42572C55.2161 1.42572 54.288 1.83232 53.7298 2.59987L46.6787 12.0006L38.7726 2.55007L38.7617 2.53864C38.1398 1.8545 37.273 1.42589 36.2662 1.42589ZM108.09 7.61895C110.503 7.61895 112.505 8.45643 114.193 10.1927L114.2 10.2002L114.208 10.207C115.945 11.8951 116.783 13.8973 116.783 16.3101C116.783 18.7229 115.945 20.7252 114.208 22.4133L114.2 22.4201L114.193 22.427C112.51 24.1586 110.513 24.9498 108.09 24.9498C105.668 24.9498 103.671 24.1585 101.988 22.427L101.98 22.4201L101.974 22.4133C100.242 20.7298 99.4507 18.7324 99.4507 16.3101C99.4507 13.8878 100.242 11.8904 101.974 10.207L101.98 10.2002L101.988 10.1927C103.676 8.45643 105.677 7.61895 108.09 7.61895Z"
            fill="url(#paint0_linear_1_87)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_87"
              x1="7.97107e-07"
              y1="6.18531"
              x2="143.406"
              y2="60.3202"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4AA09B" />
              <stop offset="1" stop-color="#41CFC7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.navigation}>
        <div>About Us</div>
        <div>Services</div>
        <div>Contact Us</div>
        <div>FAQs</div>
        <div>Blogs</div>
        <button onClick={() => setOpenForm(true)}>Login</button>
      </div>
    </header>
  );
};

export default Header;
