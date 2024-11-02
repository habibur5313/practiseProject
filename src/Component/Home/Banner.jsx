import bannerImg from '..//..//assets/banner.jpg'


const Banner = () => {
                    return <div>
                      <div className='hero bg-banner bg-base-200  rounded-xl'>
                                        <img className='h-[600px] w-11/12 mx-auto my-7 rounded-xl '  src={bannerImg} alt="" />
                    </div>
                    <div className='text-center mt-10 mb-10'>
                                        <h1 className='text-4xl font-bold'>Coffe State</h1>   
                                        <p className='text-xl font-medium max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dolores, veniam nemo laboriosam sed quis atque voluptates ex porro temporibus nesciunt vel tenetur.</p>                 
                                        </div>
                    </div>
                  }
                  
                  export default Banner