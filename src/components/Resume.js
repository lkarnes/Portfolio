import React from 'react';
import Resume from '../images/Logan-Karnes-Resume.pdf'

export default function(props) {

    return (
        <object id="Resume" data={Resume} type="application/pdf">
        <p>Your web browser doesn't have a PDF plugin.
  Instead you can <a href="filename.pdf">click here to
  download the PDF file.</a></p>
        </object>
    )
}