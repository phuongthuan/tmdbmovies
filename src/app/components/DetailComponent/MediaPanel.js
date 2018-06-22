import React, { Component } from 'react';
import image_detail_media from '../../images/detail_media1.jpg';
import image_detail_profile from '../../images/detail_profile_image.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class MediaPanel extends Component {

    render() {
        return (
            <section className="panel media_panel media scroller">
                <Tabs selectedTabClassName="active">
                    <div className="menu_bar">
                        <h3>Media</h3>
                        <TabList>
                            <Tab>
                                <div className="media_panel">
                                    Most Popular
                                </div>
                            </Tab>

                            <Tab>
                                <div className="media_panel">
                                    Videos <span>7</span>
                                </div>
                            </Tab>

                            <Tab>
                                <div className="media_panel">
                                    Backdrops <span>21</span>
                                </div>
                            </Tab>

                            <Tab>
                                <div className="media_panel">
                                    Posters <span>81</span>
                                </div>
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="content">
                            <div className="original_content">
                                <div className="video">
                                </div>
                                <div className="backdrop">
                                    <img src={image_detail_media} alt="detail Media"/>
                                </div>
                                <div className="backdrop">
                                    <img src={image_detail_media} alt="detail Media"/>
                                </div>
                                <div className="backdrop">
                                    <img src={image_detail_profile} alt="detail Media"/>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h2>Videos Tab</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Backdrops Tab</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Posters Tab</h2>
                    </TabPanel>
                </Tabs>
            </section>
        );
    }
}

export default MediaPanel;
