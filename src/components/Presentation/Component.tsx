import { Component } from 'react';
import styles from './styles.module.scss';
import { Props, State, Icon } from './types';
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
import Carrousel, { CarrouselElement } from '../Carrousel';

export default class App extends Component<Props, State> {
    icons: Array<Icon> = [];

    state: State = {
        icons: []
    };

    getLanguagesIcons = (): Array<CarrouselElement> => [
        {
            name: 'html',
            Element: <SiHtml5 className={styles.icon} />
        },
        {
            name: 'css3',
            Element: <SiCss3 className={styles.icon} />
        },
        {
            name: 'javascript',
            Element: <SiJavascript className={styles.icon} />
        },
        {
            name: 'typescript',
            Element: <SiTypescript className={styles.icon} />
        },
        {
            name: 'python',
            Element: <SiPython className={styles.icon} />
        },
        {
            name: 'cplusplus',
            Element: <SiCplusplus className={styles.icon} />
        },
        {
            name: 'csharp',
            Element: <SiCsharp className={styles.icon} />
        }
    ];

    getFrontEndIcons = (): Array<CarrouselElement> => [
        {
            name: 'react',
            Element: <SiReact className={styles.icon} />
        },
        {
            name: 'vuejs',
            Element: <SiVuedotjs className={styles.icon} />
        },
        {
            name: 'angular',
            Element: <SiAngular className={styles.icon} />
        },
        {
            name: 'sass',
            Element: <SiSass className={styles.icon} />
        }
    ];

    getBackEndIcons = (): Array<CarrouselElement> => [
        {
            name: 'nodejs',
            Element: <SiNodedotjs className={styles.icon} />
        },
        {
            name: 'express',
            Element: <SiExpress className={styles.icon} />
        },
        {
            name: 'django',
            Element: <SiDjango className={styles.icon} />
        },
        {
            name: 'flask',
            Element: <SiFlask className={styles.icon} />
        }
    ];

    getCommunicationsIcons = (): Array<CarrouselElement> => [
        {
            name: 'socketio',
            Element: <SiSocketdotio className={styles.icon} />
        },
        {
            name: 'graphql',
            Element: <SiGraphql className={styles.icon} />
        }
    ];

    getDatabasesIcons = (): Array<CarrouselElement> => [
        {
            name: 'mysql',
            Element: <SiMysql className={styles.icon} />
        },
        {
            name: 'mongodb',
            Element: <SiMongodb className={styles.icon} />
        },
        {
            name: 'sqlite',
            Element: <SiSqlite className={styles.icon} />
        },
        {
            name: 'postgresql',
            Element: <SiPostgresql className={styles.icon} />
        },
        {
            name: 'mariadb',
            Element: <SiMariadb className={styles.icon} />
        },
        {
            name: 'sqlserver',
            Element: <SiMicrosoftsqlserver className={styles.icon} />
        }
    ];

    getDeploymentIcons = (): Array<CarrouselElement> => [
        {
            name: 'github',
            Element: <SiGithub className={styles.icon} />
        },
        {
            name: 'docker',
            Element: <SiDocker className={styles.icon} />
        },
        {
            name: 'aws',
            Element: <SiAmazonaws className={styles.icon} />
        }
    ];

    getIcons = (category: Categories): Array<CarrouselElement> => {
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

    render() {
        const categories = Object.values(Categories).filter(
            o => typeof o !== 'string'
        ) as Array<Categories>;
        return (
            <div className={styles.root}>
                {categories.map((category, index) => {
                    const radius = (index + 1) * 5 + 5;
                    const speed = Math.floor((index + 1) * 10 + index / 3);
                    return (
                        <div key={category}>
                            <div
                                className={styles.radius}
                                data-radius={radius}
                                data-speed={index}
                            />
                            <div
                                className={styles.message}
                                data-radius={radius}
                                data-speed={speed}
                                data-direction={index % 2 === 0 ? 'normal' : 'reverse'}
                            >
                                <Carrousel elements={this.getIcons(category)} />
                            </div>
                        </div>
                    );
                })}
                <div className={styles.title}>Hello, I'm David</div>
            </div>
        );
    }
}
