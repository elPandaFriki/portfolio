import React, { Component } from "react";
import { Typography, styled, Link, Divider } from "@mui/material";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";

const Root = styled("div")((props) => {
  const { theme } = props;
  return {
    backgroundColor: theme.palette.primary.backgroundColor,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
});

const Section = styled("div")((props) => {
  return {
    padding: 0,
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
});

const TextDivider = styled(Divider)((props) => {
  return {
    marginLeft: "10px",
    marginRight: "10px",
  };
});

const RSSLink = styled(Link)((props) => {
  const { theme } = props;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    marginRight: "10px",
    cursor: "pointer",
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  };
});

export default class Presentation extends Component {
  render() {
    return (
      <Root>
        <Section>
          <Typography variant={"h1"}>Hello, i'm David!</Typography>
        </Section>
        <Section>
          {[
            "Software Engineer",
            "Full Stack Developer",
            "Open Source Enthusiast",
          ].map((o, index, arr) => {
            return (
              <React.Fragment key={index}>
                <Typography variant={"h4"}>{o}</Typography>
                {index < arr.length - 1 && (
                  <TextDivider
                    orientation="vertical"
                    flexItem
                    variant="middle"
                  />
                )}
              </React.Fragment>
            );
          })}
        </Section>
        <Section>
          {[
            {
              link: "https://twitter.com/dperera42",
              label: "",
              icon: <Twitter fontSize="large" />,
            },
            {
              link: "https://github.com/elPandaFriki",
              label: "",
              icon: <GitHub fontSize="large" />,
            },
            {
              link: "https://www.linkedin.com/in/pereradavid/",
              label: "",
              icon: <LinkedIn fontSize="large" />,
            },
          ].map((o, index, arr) => {
            return (
              <RSSLink target="_blank" href={o.link} key={index}>
                {o.icon != null && o.icon}
                <Typography variant={"h4"}>
                  {o.label != null && o.label}
                </Typography>
              </RSSLink>
            );
          })}
        </Section>
      </Root>
    );
  }
}
