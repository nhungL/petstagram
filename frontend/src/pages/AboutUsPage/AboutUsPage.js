import React from "react";
import AppBarContent from "../../components/ResponsiveAppBar/AppBarContent";
import useStyles from "./Style";

export default function AboutUsPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBarContent />
      <h1 className={classes.pageTitle}>About Us</h1>
      <p className={classes.introText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
        ultrices vestibulum. Nunc dui mi, maximus vitae dignissim quis, congue
        ac orci. Cras ante orci, vulputate vitae maximus vel, dapibus non orci.
        Aenean imperdiet sapien ac lectus ultricies mollis. Fusce purus leo,
        scelerisque commodo dolor eu, aliquet commodo ex. Phasellus in sapien
        lectus. Mauris vel sollicitudin nunc. Integer vulputate quam urna, vitae
        mollis turpis bibendum eget. Mauris quis tortor auctor, mattis leo in,
        luctus ligula. Donec facilisis nisl ut ligula tincidunt, tincidunt
        fermentum ex laoreet. Nullam finibus diam a augue efficitur, vel
        porttitor lacus faucibus. Donec eleifend consectetur euismod. Vivamus
        sodales felis ut semper feugiat.
      </p>
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
              Nullam sodales ante dui, eu fermentum orci consectetur a. Morbi
              rhoncus libero quis gravida tincidunt. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce ac placerat mi. Mauris facilisis convallis auctor. Sed et
              pharetra nibh, eu lacinia ante. Praesent eu elementum mi.
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
              Nullam sodales ante dui, eu fermentum orci consectetur a. Morbi
              rhoncus libero quis gravida tincidunt. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce ac placerat mi. Mauris facilisis convallis auctor. Sed et
              pharetra nibh, eu lacinia ante. Praesent eu elementum mi.
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
              Nullam sodales ante dui, eu fermentum orci consectetur a. Morbi
              rhoncus libero quis gravida tincidunt. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce ac placerat mi. Mauris facilisis convallis auctor. Sed et
              pharetra nibh, eu lacinia ante. Praesent eu elementum mi.
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
