import React from 'react';
import PageTop from '../utils/PageTop';
import {connect} from 'react-redux';

import {getBrands, getAttribute1, getAttribute2} from '../../actions/products_actions';
import CollapseCheckbox from '../utils/CollapseCheckbox';
import CollapseRadio from '../utils/CollapseRadio';

import {price} from "../utils/Form/fixedCategories";


class Shop extends React.Component {

    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: {
            brand: [],
            attribute1: [],
            attribute2: [],
            price: [],
        }
    };

    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getAttribute1());
        this.props.dispatch(getAttribute2());
    }

    handlePrice = (value) => {
        const data = price;
        let array = [];
        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array= data[key].array;
            }
        }
        return array;
    };

    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters};
        newFilters[category] = filters;

        if (category === "price") {
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues;
        }

        this.setState({filters: newFilters});
    };


    render() {
        console.log("filters: ", this.state.filters);
        const {products} = this.props;


        return (
            <div>
                <PageTop title="Browse products"/>
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">

                            {/*====== Brands of the product model ===============*/}
                            <CollapseCheckbox
                                initState={true} /*component open(expanded) when loaded*/
                                title="Brands"
                                list={products.brands}/*a list of checkboxes: comes from redux store */
                                handleFilters={(filters) => this.handleFilters(filters, 'brand')}

                            />

                            {/*====== attribute1 of the product model =============*/}
                            <CollapseCheckbox
                                initState={false} /*component open(expanded) when loaded*/
                                title="attribute1 - Shape"
                                list={products.attribute1}/*a list of checkboxes: comes from redux store */
                                handleFilters={(filters) => this.handleFilters(filters, 'attribute1')}

                            />

                            {/*====== attribute2 of the product model =============*/}
                            <CollapseCheckbox
                                initState={false} /*component open(expanded) when loaded*/
                                title="attribute2 - Size"
                                list={products.attribute2}/*a list of checkboxes: comes from redux store */
                                handleFilters={(filters) => this.handleFilters(filters, 'attribute2')}

                            />

                            {/*====== price of the product model =============*/}
                            <CollapseRadio
                                initState={true} /*component open(expanded) when loaded*/
                                title="Price"
                                list={price}/*a list of checkboxes: comes from redux store */
                                handleFilters={(filters) => this.handleFilters(filters, 'price')}

                            />


                        </div>
                        <div className="right">
                            right
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};
export default connect(mapStateToProps)(Shop);