import React from 'react';



const News = () => {
  const news = [
    {
      source: {
        id: null,
        name: 'Tsn.ua',
      },
      author: 'ТСН Редакція',
      title:
        'УЄФА оголосив про перенесення фіналів Ліги чемпіонів та Ліги Європи - ТСН - Телевізійна служба новин',
      description:
        'Вирішальні матчі єврокубкових турнірів не зможуть відбутися в травні.',
      url:
        'https://tsn.ua/prosport/uyefa-ogolosiv-pro-perenesennya-finaliv-ligi-chempioniv-ta-ligi-yevropi-1513131.html',
      urlToImage:
        'https://img.tsn.ua/cached/1567093873/tsn-f31867ea2500d8c162f8e1b3822736e1/thumbs/1200x630/e4/79/ea425f10aabe246a204d907f52b679e4.jpeg',
      publishedAt: '2020-03-23T18:05:00Z',
      content:
        '2020   . . . , ,   .As a result of the COVID-19 crisis, UEFA has today formally postponed the following finals, originally scheduled for May 2020.@UWCL@EuropaLeague@ChampionsLeague\r\nNo decision has yet been made on rearranged dates. Further announcements will… [+70 chars]',
    },
    {
      source: {
        id: null,
        name: 'Pravda.com.ua',
      },
      author: 'Українська правда',
      title:
        'У нардепа зі "Слуги народу" виявили коронавірус - Українська правда',
      description:
        'У нардепа від партії “Слуга народу” Руслана Горбенка виявили позитивний результат на Covid-19, це третій випадок зараження коронавірусом серед народних депутатів.',
      url: 'https://www.pravda.com.ua/news/2020/03/23/7244798/',
      urlToImage:
        'https://img.pravda.com/images/doc/3/0/3014bee-preview-w698zc0.png',
      publishedAt: '2020-03-23T18:02:42Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Unian.ua',
      },
      author: null,
      title:
        'У Кабміні розповіли, коли пенсіонери отримають одноразову доплату - УНІАН-Екологія',
      description:
        'Одноразові виплати також отримають особи з інвалідністю та одержувачі соціальних пенсій.',
      url:
        'https://www.unian.ua/economics/finance/10926956-u-kabmini-rozpovili-koli-pensioneri-otrimayut-odnorazovu-doplatu.html',
      urlToImage:
        'https://images.unian.net/photos/2020_03/thumb_files/620_324_1584960696-3251.jpeg?1',
      publishedAt: '2020-03-23T09:58:00Z',
      content: null,
    },
  ];
  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px',
      paddingTop: '40px',
      textAlign: 'center',
      margin: 'auto',
      paddingBottom: '20px',
     
      
    }}>
     
      {news.map((item, index) => {
        return (
          <div key={item.id}>
            <img alt="" src={item.urlToImage} style={{
                maxWidth: '485px'
                }}/>
            <div>{item.title}</div>
            <div>{item.description}</div>
            
            
          </div>
        );
      })}
    </div>
  );
};

export default News;
