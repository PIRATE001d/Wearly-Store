import Hero from '../ui/Hero';
import Companies from '../ui/Companies';
import NewArrivel from '../ui/NewArrivel';
import BrowseBy from '../ui/BrowseBy';

function Home() {
  return (
    <>
      <Hero />
      <Companies />

      <div className="container mx-auto px-4">
        <div className="space-y-16 py-16">
          <div>
            <NewArrivel />
          </div>

          <div>
            <BrowseBy />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
