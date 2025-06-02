import { motion } from "motion/react"
import { fadeIn } from '../utils/motion';

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  return (
    <section className='w-full bg-gray-50 py-16 px-4 md:px-8 sm:px-6 ' id="about">
      <motion.div
       variants= {fadeIn('up', 0.3)}
    initial='hidden'
    whileInView='show'
      className='max-w-6xl mx-auto text-center'>
      <div className='flex justify-between items-center gap-12 max-md:flex-col'>
                <div>
                <p className='uppercase font-medium text-sm text-purple-600 mb-2'>Achieve More</p>
                <h2 className='text-3xl  w-full font-bold text-gray-900'>Purpose of a convoy is to keep your team</h2>
                </div>

                <div className="flex  gap-8 max-sm:flex-col max-sm:mt-6">
                  {features.map((feature, index) => (
                    <div key={index} className='flex  gap-4 mb-6'>
                      <span className='w-12 h-12 flex items-start justify-start rounded-lg'>{feature.icon}</span>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-800'>{feature.title}</h3>
                        <p className='text-gray-600'>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

            </div>

      </motion.div>
    </section>
  )
}

export default PurposeSection