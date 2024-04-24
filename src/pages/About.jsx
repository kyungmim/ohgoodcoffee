import boram from '@assets/boram.jpg';
function About() {
  return (
    <div className="l_wrapper">
      <h2 className="about-title">보람3조가 최고임.. 아무튼 체고~</h2>
      <div className="about">
        <div className="about-cover">
          <img className="about-cover-src" src={boram} alt="보람3조" />
        </div>
        <div className="about-contents">
          <div className="about-text">
            <p className="about-descripton">
              <pre>
                한달 동안 저희 다 멀리사는데 매일 만나서 프로젝트 하느라 정말 고생많았고, <br />
                열심히 노력했으니까 후회는 없길 바라요!!!ㅎㅎㅎ <br />
                수고하셨고 재밋었어용!!! 보람3조 화이팅!!! 프론트엔드스쿨 9기 화이팅!! <br />
                (플젝하면서 도와주셨던 모든분들께 모두 감사인사드립니다 :))
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
