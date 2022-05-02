import React from "react";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";

export default function AboutUsPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBarContent />
      <h1 className={classes.pageTitle}>About Us</h1>
      <h2 className={classes.introText}>
        Our vision is to deliver a social media platform where pet owners can
        connect together to create friendship for their pets ❤️
      </h2>
      <hr style={{ width: "85%" }} />
      <div className={classes.pageBody}>
        <div className={classes.pageSection}>
          <img className={classes.avatar} src="thuy.jpg" alt="thuy" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "30px",
            }}
          >
            <h3 className={classes.name}>Thuy Le</h3>
            <p className={classes.description} style={{ textAlign: "left" }}>
              Hi, my name is Thuy Le! I have experience in building full-stack
              web using the MERN framework (MongoDB, Express.js, React, and
              Node.js). I am skilled in Java, C++, Swift (for iOS application),
              HTML, CSS and I am learning Kotlin for Android applications.
              Projects: I am collaborated with a team of 4 to launch an iOS app.
              I was in charge of designing the UI/UX and worked mostly on the
              backend of the application. I also have built an e-commerce
              website as a personal project utilizing React/ Redux, Node.js,
              Express, and MongoDB. I have experience working in teams which are
              mostly from school projects. I value working in a team because we
              can help and learn from each other.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <a
                href="https://www.linkedin.com/in/thuyle97/"
                target="popup"
                style={{ marginRight: "10px" }}
              >
                <img
                  className={classes.socialMediaImg}
                  src="linkedin.png"
                  alt="thuy-linkedin"
                />
              </a>
              <a href="mailto:phuongthuy9796@gmail.com" target="popup">
                <img
                  className={classes.socialMediaImg}
                  src="gmail.jpeg"
                  alt="thuy-mail"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.pageSection}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: "30px",
            }}
          >
            <h3 className={classes.name}>Nhung Luong</h3>
            <p className={classes.description} style={{ textAlign: "right" }}>
              Hi from a rising senior pursuing B.S. in Computer Science, minors
              in Mathematics at San Jose State University. I have passion for
              things that need critical thinking and logic, and I found Computer
              Science as a good match for me. I love to build software
              application that make positively impacts on people, and make our
              lives happier! Day by day, I'm improving myself to become a better
              software developer. This application starts from our love for
              pets, and we'd love to create a platform for pet owners to
              communicate as well as to make friends for their pets. Let us know
              how you want to improve the app to meet your expectation via our
              contact information. I also love to collaborate with people and
              learn from others so let's connect!
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <a
                href="https://www.linkedin.com/in/nhungluong/"
                target="popup"
                style={{ marginRight: "10px" }}
              >
                <img
                  className={classes.socialMediaImg}
                  src="linkedin.png"
                  alt="nhung-linkedin"
                />
              </a>
              <a href="mailto:nhung.luong1098@gmail.com" target="popup">
                <img
                  className={classes.socialMediaImg}
                  src="gmail.jpeg"
                  alt="nhung-mail"
                />
              </a>
            </div>
          </div>
          <img className={classes.avatar} src="nhung.jpg" alt="nhung" />
        </div>
        <div className={classes.pageSection}>
          <img className={classes.avatar} src="truc.jpg" alt="truc" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "30px",
            }}
          >
            <h3 className={classes.name}>Truc Phan</h3>
            <p className={classes.description} style={{ textAlign: "left" }}>
              I'm a software engineer whose focus is full-stack development. I
              am strongly driven by utilizing technology to better human lives
              and I believe in building innovative products that many people
              consider impossible! I have been working for Experian as a
              software engineer intern since November 2021 and will be interning
              at Momentive.ai in Summer 2022. Besides coding, love goring
              thrifting both physically and virtually (I ❤️ Depop!), trying new
              food/coffee/boba spots and taking candid pictures for the gram. I
              also like being active such as hitting the gym and going on hikes.
              For times when I feel a little potato, I’d prefer staying in,
              watching shows, listening to music and cleaning my room. My
              current goals right now are to adopt a cat, get better at cooking,
              travel more... Did I already mention adopting a cat?
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <a
                href="https://www.linkedin.com/in/tructphan/"
                target="popup"
                style={{ marginRight: "10px" }}
              >
                <img
                  className={classes.socialMediaImg}
                  src="linkedin.png"
                  alt="truc-linkedin"
                />
              </a>
              <a href="mailto:pttruc.308@gmail.com" target="popup">
                <img
                  className={classes.socialMediaImg}
                  src="gmail.jpeg"
                  alt="truc-mail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
