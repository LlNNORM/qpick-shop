import './headphones-list.css'
import HeadphonesListItem from '../headphones-list-item/headphones-list-item';

const HeadphonesList = ({headphones, type}) => {

    const elements = headphones.map (item => {
        const {id, ...itemProps} = item;
        return (
            <HeadphonesListItem key = {id} id={id} {...itemProps} />
        )
    })
    return (
        <div className="headphones">
            <div className="headphones__title">{type}</div>
            <div className="headphones__wrapper">
                {elements}
            </div>
        </div>
        
    )
}

export default HeadphonesList;