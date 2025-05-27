export const SectionLetter = () => {
  return (
    <section className='section section-new-letter'>
      <div className='new-letter-overlay'></div>
      <div className='new-letter-container'>
        <div className='container flex h-full items-center new-letter-content items-start-md'>
          <p className='new-letter-title'>Subscribe to our newsletter andreceive exclusive offers every week</p>
          <form action='' method='post' className='form-subscribe'>
            <input placeholder='Enter your email' className='form-subscribe-email' />
            <button className='rounded-lg button-primary button-submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
