import ProductCrad from '../Product/ProductCrad';
import SectionHeading from '../shared/SectionHeading';
import { DEALS } from '../../data/prducts'

const TodayDeals = () => {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <SectionHeading
                    title="Top Saver Today"
                    moreText="All Offers"
                />
                 <div className="flex gap-7 overflow-x-auto mt-5 pl-2 -ml-2 no-scrollbar pt-5 pb-14">
                    {DEALS.map((product, index) => (
                        <ProductCrad
                        key={index}
                        product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TodayDeals