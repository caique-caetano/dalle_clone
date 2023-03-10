import React, { useState, useEffect} from 'react';

import { Loader, Card, FormField} from '../components';

const RenderCards = ({data, title}) => {
  if(data?.length > 0 ) {
    return data.map((post) => <Card key={post._id} {...post} /> ) 
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
      {title}
    </h2>
  )
}


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setsearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchedResults] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if(response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }
      } catch (error) {
         alert(error)
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

const handleSearchChange = (e) => {
  clearTimeout(searchTimeout);
  setsearchText(e.target.value);


  setSearchTimeout(
    setTimeout(() => {
      const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
      setSearchedResults(searchResult);
    }, 500),
  );
}

  return (
    <section className="max-w-7x1 mx-auto">
      <div className="">
        <h1 className="font-extrabold text-[#222328] text-[32px]">Vitrine da Comunidade</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Navegue através de uma coleção de imagens imaginativas e visualmente impressionantes geradas pela DALL-E AI</p>
      </div>

      <div className="mt-16">
        <FormField 
          labelName="Pesquisar Posts"
          type="texto"
          name="text"
          placeHolder="Pesquisar Posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">

        {
          loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>Mostrando resultados para <span className='text-[#222328]'>{searchText}</span> </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                  {searchText ? (
                    <RenderCards 
                      data={searchResults}
                      title="Sem resultado na pesquisa"
                    />
                  ) : (
                    <RenderCards 
                      data={allPosts}
                      title="Não foram encontrado posts" 
                    />                
                    )
                }
              </div>
            </>
          )
        }

      </div>

    </section>
  )
}

export default Home