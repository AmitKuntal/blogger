import React from 'react';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import EditorJs from 'react-editor-js';

 const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: Paragraph,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
}

function Editor() {
  const titleEditor = null;
  const contentEditor = null;

  const saveTitle = async () => {
    // https://editorjs.io/saving-data
    try {
      const outputData = await titleEditor.save()
      console.log('Title data: ', outputData)
    } catch (e) {
      console.log('Title Saving failed: ', e)
    }
  }

  const saveContent = async () => {
    // https://editorjs.io/saving-data
    try {
      const outputData = await contentEditor.save()
      console.log('Content data: ', outputData)
    } catch (e) {
      console.log('Content Saving failed: ', e)
    }
  }

    
    return (<div className="w-full">
            <EditorJs tools={EDITOR_JS_TOOLS.text}  autofocus={false}
             placeholder="Enter your Title" minHeight={1} 
             onChange={()=>saveTitle}
             className="text-4xl"
             editorInstance={editorInstance => {
              titleEditor = editorInstance
              }}/>

            <EditorJs tools={EDITOR_JS_TOOLS} autofocus={false} placeholder="Enter Your Post Here"
            onChange={()=>saveContent}
             editorInstance={editorInstance => {
              contentEditor = editorInstance
              }}/>
            />
            </div>
    );
  }

export default Editor;
  
