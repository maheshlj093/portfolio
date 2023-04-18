
function Form() {
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center mt-3"><button className='btn btn-danger' type="submit">Send Message</button></div>
            </form>
        </div>
    )
}

export default Form
