import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main class="ss_main">
                <div class="container">

                    <div class="ss_media">
                        <h2 class="title">Top Rated Movies</h2>

                        <div class="ss_results">
                            <div class="ss_item ss_card">
                                <div class="ss_image_content">
                                    <a href="">
                                        <img src="./assets/images/items/image_content.jpg" alt="The Shawshank Redemption" />
                                        <div class="ss_meta">

                                        </div>
                                    </a>
                                </div>

                                <div class="ss_info">
                                    <div class="ss_wrapper">
                                        <div class="ss_consencus">
                                            <div class="ss_outer_ring">

                                            </div>
                                        </div>
                                        <div class="ss_wrapper_title">
                                            <a href="" class="ss_title_result">The Shawshank Redemption</a>
                                            <span>September 23, 1994</span>
                                        </div>
                                    </div>

                                    <p class="ss_overview">
                                        Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at
                                        the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During…
                                    </p>
                                    <p class="ss_view_more">
                                        <a href="">More Info</a>
                                    </p>
                                </div>
                            </div>
                            


                            <div class="ss_pagination">
                                <p class="left">Currently on page: 1 of 288
                                    <span class="total_results grey">(5,756 results)</span>
                                </p>
                                <p class="right">
                                    <a href="">
                                        <i class="fas fa-arrow-alt-circle-right"></i>
                                        <span></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

export default Main;