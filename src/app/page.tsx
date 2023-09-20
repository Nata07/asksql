"use client"

import { Stars, Trash2 } from "lucide-react";
import { useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs'

import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism-dark.css';
import { useChat, useCompletion } from "ai/react";

export default function Home() {
  const [schema, setSchema] = useState('')
  
  const {completion, input, handleInputChange, handleSubmit} = useCompletion({
    api: '/api/generate-sql/',
    body: {
      schema
    },
    
  })
  
  console.log(completion)
  const result = completion


  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4 px-6">
      <header className="flex items-center justify-between">
        <h1 className="text-lemon font-bold text-2xl">Ask SQL</h1>
        <button>
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>
      <form onSubmit={handleSubmit} className="w-full flex flex-col py-8 text-foam space-y-4">
        <label 
          className="text-lg font-light" 
          htmlFor="schema"
        >
          Cole seu SQL aqui: 
        </label>
        {/* <textarea 
          className="w-full px-4 py-3 bg-[#151A2A] outline-none focus:ring-2 focus:ring-green-800 rounded-md" 
          name="schema" 
          id="schema" 
          cols={20} 
          rows={10} 
        /> */}

        <Editor
          textareaId="schema"
          className="w-full h-40 font-mono px-4 py-3 bg-[#151A2A] outline-none focus-within:ring-2 focus-within:ring-green-800 rounded-md"
          value={schema}
          onValueChange={code => setSchema(code)}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
        />

        <label 
          className="text-lg font-light" 
          htmlFor="question"
        >
          Faca uma pergunta sobre seu SQL aqui: 
        </label>
        <textarea 
          value={input}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#151A2A] outline-none focus:ring-2 focus:ring-green-800 rounded-md" 
          name="question" 
          id="question"
        />

        <button 
          type="submit" 
          className="w-full h-14 justify-center px-6 py-3 items-center flex text-pistachio border border-pistachio rounded-lg "
        >
          <Stars className="mr-3" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div className="text-snow space-y-4">
        <span className="font-light">Faca uma pergunta sobre seu SQL aqui: </span>

        <Editor
          readOnly
          value={result}
          onValueChange={() => {}}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          className="w-full h-40 font-mono px-4 py-3 bg-blueberry rounded-md border border-snow/30"
          textareaClassName="outline-none"
        />
      </div>
    </div>
  )
}
