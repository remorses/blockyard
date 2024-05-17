import HeroFramerComponent from '~/framer/hero'
import '../framer/styles.css'
import FooterFramerComponent from '~/framer/footer'

export default function Page() {
    return (
        <div className='bg-[#C0C0C0] pt-12 flex flex-col h-full'>
            <div className='max-w-[1200px] mx-auto flex flex-col gap-6'>
                <HeroFramerComponent.Responsive
                    className='!w-full'
                    cta='/login'
                    variants={{ base: 'expanded-intro' }}
                />
                <FooterFramerComponent.Responsive
                    className='!w-full'
                    variants={{ base: 'expanded-footer' }}
                />
            </div>
        </div>
    )
}
