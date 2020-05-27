import React from 'react'
import Home from './Home'
import { getProducts } from '../../services/server'


class HomeContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            newProducts: [],
            featureProducts: [],
            loading: false
        }
    }
    async componentDidMount() {
        const newProducts = await getProducts({ params: { isFeatured: false, limit: 6 } }).then(({ data }) => {
            console.log("data", data.data);
            return data.data.docs
        })
        const featureProducts = await getProducts({ params: { isFeatured: true, limit: 6 } }).then(({ data }) => {
            return data.data.docs
        })
        setTimeout(() => {
            this.setState({
                newProducts,
                featureProducts,
                loading:true
            })
        },1000)
        // this.setState({
        //     newProducts,
        //     featureProducts
        // })
    }

    _extract = () => ({
        newProducts: this.state.newProducts,
        featureProducts: this.state.featureProducts,
        loading: this.state.loading
    })

    render() {
        return <Home {...this._extract()} />
    }
}

export default HomeContainer