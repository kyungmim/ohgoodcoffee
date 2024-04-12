import MagazineListItem from './MagazineListItem';

function MagazineList() {
  return (
    <>
      <section className="section type_magazine">
        <div className="l_wrapper">
          <div className="section-filter">
            <p className="section-count">POSTING</p>
            <span className="section-count num">8</span>
          </div>

          <div className="section-grid">
            <ul className="grid">
              <MagazineListItem />
              <MagazineListItem />
              <MagazineListItem />
              <MagazineListItem />
              <MagazineListItem />
              <MagazineListItem />
              <MagazineListItem />
              <MagazineListItem />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineList;
