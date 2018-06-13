import React, { Component } from 'react';
import image from '../../static/images/items/image_content.jpg';

class Item extends Component {
    render() {
        return (
            <div className="ss_item ss_card">
                <div className="ss_image_content">
                    <a href="">
                        <img src={image} alt="The Shawshank Redemption" />
                        {/* <div className="ss_meta">
                        </div> */}
                    </a>
                </div>
                <div className="ss_info">
                    <div className="ss_wrapper">
                        <div className="ss_consencus">
                            <div className="ss_outer_ring">
                            </div>
                        </div>
                        <div className="ss_wrapper_title">
                            <a href="" className="ss_title_result">The Shawshank Redemption</a>
                            <span>September 23, 1994</span>
                        </div>
                    </div>
                    <p className="ss_overview">
                        Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at
                        the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During…
                                    </p>
                    <p className="ss_view_more">
                        <a href="">More Info</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Item;