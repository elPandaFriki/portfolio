import { Component } from 'react';
import styles from './styles.module.scss';
import { Props, State, IconElement, Icon } from './types';
import { Categories } from '.';
import {
    SiAmazonaws,
    SiAngular,
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiDjango,
    SiDocker,
    SiExpress,
    SiFlask,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiMariadb,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSass,
    SiSocketdotio,
    SiSqlite,
    SiTypescript,
    SiVuedotjs
} from 'react-icons/si';

export default class App extends Component<Props, State> {
    icons: Array<Icon> = [];

    state: State = {
        icons: []
    };

    interval: any = null;

    getLanguagesIcons = (): Array<IconElement> => [
        {
            name: 'html',
            Icon: <SiHtml5 className={styles.icon} />
        },
        {
            name: 'css3',
            Icon: <SiCss3 className={styles.icon} />
        },
        {
            name: 'javascript',
            Icon: <SiJavascript className={styles.icon} />
        },
        {
            name: 'typescript',
            Icon: <SiTypescript className={styles.icon} />
        },
        {
            name: 'python',
            Icon: <SiPython className={styles.icon} />
        },
        {
            name: 'cplusplus',
            Icon: <SiCplusplus className={styles.icon} />
        },
        {
            name: 'csharp',
            Icon: <SiCsharp className={styles.icon} />
        }
    ];

    getFrontEndIcons = (): Array<IconElement> => [
        {
            name: 'react',
            Icon: <SiReact className={styles.icon} />
        },
        {
            name: 'vuejs',
            Icon: <SiVuedotjs className={styles.icon} />
        },
        {
            name: 'angular',
            Icon: <SiAngular className={styles.icon} />
        },
        {
            name: 'sass',
            Icon: <SiSass className={styles.icon} />
        }
    ];

    getBackEndIcons = (): Array<IconElement> => [
        {
            name: 'nodejs',
            Icon: <SiNodedotjs className={styles.icon} />
        },
        {
            name: 'express',
            Icon: <SiExpress className={styles.icon} />
        },
        {
            name: 'django',
            Icon: <SiDjango className={styles.icon} />
        },
        {
            name: 'flask',
            Icon: <SiFlask className={styles.icon} />
        }
    ];

    getCommunicationsIcons = (): Array<IconElement> => [
        {
            name: 'socketio',
            Icon: <SiSocketdotio className={styles.icon} />
        },
        {
            name: 'graphql',
            Icon: <SiGraphql className={styles.icon} />
        }
    ];

    getDatabasesIcons = (): Array<IconElement> => [
        {
            name: 'mysql',
            Icon: <SiMysql className={styles.icon} />
        },
        {
            name: 'mongodb',
            Icon: <SiMongodb className={styles.icon} />
        },
        {
            name: 'sqlite',
            Icon: <SiSqlite className={styles.icon} />
        },
        {
            name: 'postgresql',
            Icon: <SiPostgresql className={styles.icon} />
        },
        {
            name: 'mariadb',
            Icon: <SiMariadb className={styles.icon} />
        },
        {
            name: 'sqlserver',
            Icon: <SiMicrosoftsqlserver className={styles.icon} />
        }
    ];

    getDeploymentIcons = (): Array<IconElement> => [
        {
            name: 'github',
            Icon: <SiGithub className={styles.icon} />
        },
        {
            name: 'docker',
            Icon: <SiDocker className={styles.icon} />
        },
        {
            name: 'aws',
            Icon: <SiAmazonaws className={styles.icon} />
        }
    ];

    getIcons = (category: Categories): Array<IconElement> => {
        switch (category) {
            case Categories.LANGUAGES: {
                return this.getLanguagesIcons();
            }
            case Categories.FRONTEND: {
                return this.getFrontEndIcons();
            }
            case Categories.BACKEND: {
                return this.getBackEndIcons();
            }
            case Categories.DATABASES: {
                return this.getDatabasesIcons();
            }
            case Categories.DEPLOYMENT: {
                return this.getDeploymentIcons();
            }
            case Categories.COMMUNICATIONS: {
                return this.getCommunicationsIcons();
            }
        }
    };

    alternateIcon = (category: Categories): void => {
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
                radius: (this.icons.length + 1) * 5 + 5
            });
            this.setState({
                icons: this.icons
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
            icons: this.icons
        });
    };

    generateIcons = (): void => {
        for (const category of Object.values(Categories)) {
            if (typeof category === 'string') continue;
            this.alternateIcon(category);
        }
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
                    const { radius, Icon, name } = icon;
                    return (
                        <div id={name}>
                            <div
                                className={styles.radius}
                                data-radius={radius}
                                data-speed={index}
                            />
                            <div
                                className={styles.message}
                                data-radius={radius}
                                data-speed={(index + 1) * 3}
                                data-direction={index % 2 === 0 ? 'normal' : 'reverse'}
                            >
                                {Icon}
                            </div>
                        </div>
                    );
                })}
                <div className={styles.title}>Hello, I'm David</div>
            </div>
        );
    }
}
