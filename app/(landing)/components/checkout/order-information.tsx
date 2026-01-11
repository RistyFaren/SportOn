import CardWithHeader from "../UI/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="type your full name" id="full_name"/>
                </div>
                 <div className="input-group">
                    <label htmlFor="wa_number">WhatsApp Number</label>
                    <input type="text" placeholder="type your whatsapp number" id="wa_number"/>
                </div>
                 <div className="input-group">
                    <label htmlFor="shiping_addres">Shipping Address</label>
                    <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="shiping_addres" rows={7}/>
                </div>
            </div>
        </CardWithHeader>
    )
}
export default OrderInformation;