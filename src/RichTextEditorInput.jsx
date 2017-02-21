import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-zh-CN'; // you can import any other locale
import { Field,FieldArray } from 'redux-form';
//https://github.com/Vnkitaev/react-summernote
// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

class RichTextEditor extends Component {

  render() {
    let {input} = this.props;
    return (
      <ReactSummernote
        value={input.value}
        options={{
          lang: 'zh-CN',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={input.onChange}
      />
    );
  }
}


const RichTextEditorInput = ({source}) => {
  return(
    <span>
      <br />
      <Field name={source} component={RichTextEditor} />
    </span>
)
}

export default RichTextEditorInput;
