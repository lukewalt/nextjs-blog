'use strict';

import Layout from '../comps/Layout'
import Head from '../comps/Head';


const About = () => (
  <div>
    <Layout>
      <div className="aboutBody">
        <h2>About :</h2>
        <p>Legions of Gotham is a concept developed by Matt MacNabb back in August of 2003. There was a severe lack of quality Batman fansites
          available online at that time, and virtually no unity or voice in the fan and collecting communities.  A franchise as well-known and widely loved as
          Batman surely deserved better. Matt linked the merchandise archives that he was working on with a new forum that was created by a fan named
          Joshua Gaytos.  Matt developed the name Legions Of Gotham, and history was born.  The partnership, however,  was short-lived, as the forum
          owner wasnt interested in taking an active role in the site.  Matt eventually made the decision to split off and created his own forum in May of
          2004.
        </p>
        <p>
          The Legions of Gotham website has become synonymous with the Batman fan community. We provide the fans an opportunity to interact with
          their favorite comic book writers and artists, voice actors, toy companies and more!  LoG is well-known for a fair share of exclusives and hard to
          find content throughout the worldwide web.  We report up to date news and happenings in all things Batman.  Our audience varies between kids,
          adults, parents and collectors all over the globe. Legions of Gotham has been featured in the media, via newspapers (Variety and the Orange County Register), Magazines ('The Magazine'
          Batman Begins issue), comic books (the Batman Strikes). See our LoG in the Media section for further details on these appearances.
        </p>
        <p>
          Our goal is to bring the Batman fanbase together and unite them with contacts in the industry, to create a mutually beneficial relationship. When the fans/collectors and the industry have open communication, everybody wins!
          Above all, we are here for our love and appreciation of the finest hero to ever grace the comic page, the small and the silver screen....The Batman
        </p>
      </div>
    </Layout>
    <style jsx>{`

      .aboutBody {
        padding: 2% 10%
      }

    `}</style>
  </div>
)

export default About;
