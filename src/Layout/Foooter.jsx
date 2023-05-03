import { Footer } from 'flowbite-react';
import React from 'react';

const Foooter = () => {
    return (
        <div className=' my-16'>

            <Footer
                className='h-40 bg-blue-300'
                container={true}>
                <Footer.Copyright
                    href="#"
                    by="ChefHub"
                    year={2023}

                />
                <p>Want more to know visit our social account</p>
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
};

export default Foooter;