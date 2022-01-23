import { Component } from "react";
import styles from "./styles.module.scss";
import { Props, State, IconElement, Icon } from "./types";
import {
  SiAmazonaws,
  SiAngular,
  SiCss3,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiSocketdotio,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const languages: Array<IconElement> = [
  {
    name: "html",
    Icon: SiHtml5,
  },
  {
    name: "css3",
    Icon: SiCss3,
  },
  {
    name: "javascript",
    Icon: SiJavascript,
  },
  {
    name: "typescript",
    Icon: SiTypescript,
  },
  {
    name: "python",
    Icon: SiPython,
  },
];

const fe_frameworks: Array<IconElement> = [
  {
    name: "react",
    Icon: SiReact,
  },
  {
    name: "vuejs",
    Icon: SiVuedotjs,
  },
  {
    name: "angular",
    Icon: SiAngular,
  },
  {
    name: "sass",
    Icon: SiSass,
  },
];

const be_frameworks: Array<IconElement> = [
  {
    name: "nodejs",
    Icon: SiNodedotjs,
  },
  {
    name: "socketio",
    Icon: SiSocketdotio,
  },
];

const databases: Array<IconElement> = [
  {
    name: "mysql",
    Icon: SiMysql,
  },
  {
    name: "mongodb",
    Icon: SiMongodb,
  },
];

const development: Array<IconElement> = [
  {
    name: "github",
    Icon: SiGithub,
  },
  {
    name: "docker",
    Icon: SiDocker,
  },
  {
    name: "aws",
    Icon: SiAmazonaws,
  },
];

export default class App extends Component<Props, State> {
  icons: Array<Icon> = [];

  state: State = {
    icons: [],
  };

  interval: any = null;

  getIcons = (category: string): Array<IconElement> => {
    let icons: Array<IconElement> = [];
    switch (category) {
      case "languages": {
        icons = languages;
        break;
      }
      case "frontend": {
        icons = fe_frameworks;
        break;
      }
      case "backend": {
        icons = be_frameworks;
        break;
      }
      case "databases": {
        icons = databases;
        break;
      }
      case "development": {
        icons = development;
        break;
      }
      default: {
        break;
      }
    }
    return icons;
  };

  alternateIcon = (category: string): void => {
    const icons = this.getIcons(category);
    let active = null;
    for (let i = 0; i < this.icons.length; i++) {
      if (this.icons[i].category !== category) continue;
      active = this.icons[i];
      break;
    }
    if (active == null) {
      this.icons.push({
        category,
        name: icons[0].name,
        Icon: icons[0].Icon,
        radius: (this.icons.length + 1) * 5 + 5,
      });
      this.setState({
        icons: this.icons,
      });
      return;
    }
    let nextIcon = null;
    for (let i = 0; i < icons.length; i++) {
      if (icons[i].name !== active.name) continue;
      nextIcon = icons[i + 1];
      break;
    }
    active.name = nextIcon?.name || icons[0].name;
    active.Icon = nextIcon?.Icon || icons[0].Icon;
    this.setState({
      icons: this.icons,
    });
  };

  generateIcons = (): void => {
    this.alternateIcon("languages");
    this.alternateIcon("frontend");
    this.alternateIcon("backend");
    this.alternateIcon("databases");
    this.alternateIcon("development");
  };

  componentDidMount() {
    this.generateIcons();
    this.interval = setInterval(() => {
      this.generateIcons();
    }, 1000);
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.root}>
        {this.state.icons.map((icon, index) => {
          const { radius, Icon } = icon;
          return (
            <div>
              <div
                className={styles.radius}
                data-radius={radius}
                data-speed={index}
              />
              <div
                className={styles.message}
                data-radius={radius}
                data-speed={(index + 1) * 3}
                data-direction={index % 2 === 0 ? "normal" : "reverse"}
              >
                <Icon className={styles.icon} />
              </div>
            </div>
          );
        })}
        <div className={styles.title}>Hello, I'm David</div>
      </div>
    );
  }
}
