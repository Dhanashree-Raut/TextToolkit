import React from 'react'

export default function About( props ) {


    let styleAbout = {
        "buttonBg" : props.mode === "dark"? "rgb(73 81 89)":"white",
        "bodyBg" : props.mode === "dark"? "black":"white",
        "txtColor" : props.mode === "dark"? "white":"black",
    }

    console.log(props.mode)
    

    return (
        <>
           <div className="container my-5">
                <div className="row align-items-center">
                    
                    {/* LEFT: Text */}
                    <div className="col-md-7 " style={{ color:styleAbout.txtColor}}>
                        <h2 className="mb-3">About TextToolkit</h2>
                        <p className="text-muted">
                            TextToolkit is a modern React-based text utility application designed to simplify everyday text formatting tasks.
                            It allows users to convert, clean, and analyze text with ease and accuracy.
                            The application provides real-time statistics such as word count, character count, sentence count, and paragraph count.
                            Features like uppercase, lowercase, sentence case conversion, and extra space removal improve text readability.
                            TextToolkit includes a light and dark mode to ensure a comfortable user experience.
                            The interface is clean, responsive, and built using Bootstrap for consistent design.
                            This project also demonstrates practical usage of React hooks, component-based architecture, and UI theming.
                        </p>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="col-md-5 text-center">
                    <img
                        src="https://img.freepik.com/free-vector/text-tool-concept-illustration_114360-7981.jpg"
                        className="img-fluid rounded shadow"
                        alt="TextToolkit illustration"
                    />
                    </div>

                </div>
            </div>


            <div className='container my-3'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ color:styleAbout.txtColor , background: styleAbout.buttonBg}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            TextToolkit
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color:styleAbout.txtColor , background: styleAbout.bodyBg}}>
                            TextToolkit is a React-based text utility application designed to help users quickly format, analyze, and clean text. It provides essential text tools such as case conversion, sentence formatting, and space removal in a simple and user-friendly interface.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  style={{ color:styleAbout.txtColor , background: styleAbout.buttonBg}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Features & Use Cases
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color:styleAbout.txtColor , background: styleAbout.bodyBg}}>
                            TextToolkit allows users to:
                            <ul>
                                <li>Convert text to uppercase, lowercase, and sentence case</li>
                                <li>Remove unnecessary extra spaces</li>
                                <li>Copy processed text instantly</li>
                                <li>View real-time word, character, sentence, and paragraph counts</li>
                            </ul>
                            It is useful for students, writers, developers, and anyone working with text daily.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={{ color:styleAbout.txtColor , background: styleAbout.buttonBg}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Technology & Design
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color:styleAbout.txtColor , background: styleAbout.bodyBg}}>
                            TextToolkit is built using React functional components and hooks for efficient state management. Bootstrap is used for responsive UI design, and the application supportslight and dark modes to enhance accessibility and user comfort.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={{ color:styleAbout.txtColor , background: styleAbout.buttonBg}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Future Vision
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color:styleAbout.txtColor , background: styleAbout.bodyBg}}>
                            TextToolkit aims to grow into a more advanced text-processing platform by introducing features such as title case conversion, text download options, readability analysis, and additional customization tools.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
