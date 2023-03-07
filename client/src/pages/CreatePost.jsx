import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader} from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:','
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => [

  ]
  
  const handleChange = (e) => {


  }

  const handleSurpriseMe = () => {

  }
  
  return (
    <section className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="font-extrabold text-[#222328] text-[32px]">Crie</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Crie uma coleção de imagens imaginativas e visualmente impressionantes através da DALL-E AI e compartilhe com a comunidade.</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
            labelName="Seu nome"
            type="text"
            name="name"
            placeHolder="Seu Nome"
            value={form.name}
            handleChange={handleChange}
            />
            <FormField 
            labelName="Descrever"
            type="text"
            name="prompt"
            placeHolder="Um robô de brinquedo de pelúcia sentado contra uma parede amarela"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
            />
        </div>
      </form>
    </section>
  )
}

export default CreatePost