import React, { useState, useEffect, } from "react";
import { ContainerBody, Text, BigInfoBlock, BlackTheme, SmallInfoBlock, Meloch, Solved, StyledDiv, Fle, WhiteText, BlackTheme2, BlackBlackTheme, Title } from "./style.js"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPointySword } from "react-icons/gi";
import "./style.css"
import Avatar from '@mui/material/Avatar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import QuizIcon from '@mui/icons-material/Quiz';
import {Link} from 'react-router-dom';
import rickroll from '../Footer/never-gonna-give-u-up.mp3';
import fnaf from './fnaf_sound.mp3';
import augh from './aughhhhh.mp3';
import vine from './vine-boom.mp3';
import useSound from 'use-sound';



const Body = ({ }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [play] = useSound(rickroll);
  const [play2] = useSound(fnaf);
  const [play3] = useSound(augh);
  const [play4] = useSound(vine);


  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const images = [
    {
      original: 'https://avatars.dzeninfra.ru/get-zen_doc/1722013/pub_5dfb64ce9515eef13079f27f_5dfb6ee9bc251400ac97e49a/scale_1200',
    },
    {
      original: 'https://isu.ifmo.ru/pls/apex/f?p=2143:0:0:DWNLD_F:NO::FILE:89261A543994539EB594F823B278066B',
    },
    {
      original: 'https://ctfnews.ru/uploads/photos/IMG_8507.jpg',
    },
    {
      original: 'https://pp.userapi.com/c830309/v830309232/495c/N0GjSLCgMH0.jpg',
    },
    {
      original: 'https://pp.userapi.com/c626520/v626520420/2fbd4/Uoset9FTHO8.jpg',
    },
  ];

  const [UserInput, setUserInput] = useState("")
  const handleClick = () => { settaskSolved2(!taskSolved2); };


  const [taskSolved1, settaskSolved1] = useState(false)
  const [taskSolved2, settaskSolved2] = useState(false)

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserInput(storedName);
    }
  }, []);
  const data = [
    {
      name: '10:00',
      master: 0,
      hacker: 0,
      baddy: 0,
      you: 0,
    },
    {
      name: '12:00',
      master: 2000,
      hacker: 1398,
      baddy: 500,
      you: 1666,
    },
    {
      name: '14:00',
      master: 2500,
      hacker: 5000,
      baddy: 700,
      you: 3332
    },
    {
      name: '16:00',
      master: 2800,
      hacker: 4500,
      baddy: 6000,
      you: 5000,
    },
    {
      name: '18:00',
      master: 3500,
      hacker: 4500,
      baddy: 8000,
      you: 6666,
    },
    {
      name: '20:00',
      master: 4000,
      hacker: 4500,
      you: 8332,
    },
    {
      name: '23:59',
      master: 4900,
      hacker: 7000,
      you: 10000,
    },
  ];
  return (
    <>
      <ContainerBody>

        <BlackTheme id="flag_point">

          <Fade left big><SmallInfoBlock><img src={"https://png.pngtree.com/png-clipart/20230221/ourmid/pngtree-free-transparent-blank-waving-flag-png-image_6611961.png"} /></SmallInfoBlock></Fade>
          <Fade right>
            <SmallInfoBlock>
              <Text>
                <p>Ну смотри, {UserInput}</p>
                <p>CTF — <span className="GreenText">Capture The Flag</span>, также известный под русифицированным вариантом — Захват флага, это игровая информационная безопасность, набирающая
                  большую популярность за последние годы. За основу взяты инструменты и приемы реальных безопасников, но на работе как правило нет таких <span className="GreenText">"уцуцуг"</span>, как в CTF.
                  И нет, {UserInput}, это не означает, что после нескольких занятий <span className="GreenText">ты сможешь взломать</span> бабушкин чайник или профиль Одноклассника. Вас познакомят с уязвимостями
                  и многим другим, чтобы в том числе не <span className="GreenText">стать жертвой злоумышленников</span>. CTF разделен на несколько разделов, так что каждый найдет что-то для себя!
                </p>
              </Text>
            </SmallInfoBlock>
          </Fade>
        </BlackTheme>
        <Bounce><Meloch><p><span className="GreenText">Играя в CTF, ты не становишься инфобез специалистом!</span></p></Meloch></Bounce>

        <BlackTheme>
          <BigInfoBlock>
            <Fade left big>
              <p  >{UserInput}, давай теперь познакомимся с форматами игр.</p>
              <p>
                CTF соревнования обычно рассчитаны для команд 3-5 человек для широкого спектора возрастов, также есть 2 основных формата
                проведения. Еще существует так называемый Pentest, но его почти не используют на соревнованиях
              </p>
            </Fade>
          </BigInfoBlock>
        </BlackTheme>
        <BlackTheme>
          <Grid>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hacker" stroke="#8884d8" />
              <Line type="monotone" dataKey="master" stroke="#82ca9d" />
              <Line type="monotone" dataKey="baddy" stroke="#d88512" />
              {taskSolved1 === true && <Line type="monotone" dataKey="you" stroke="#D90368" />}
            </LineChart>

            {taskSolved1 === true && <Fade><Solved><Alert variant="outlined" severity="success"><span className="GreenText">Ты нашел флаг! Поздравляю, {UserInput}</span></Alert></Solved></Fade>}
            <button className="Button1" onClick={() => { settaskSolved1(!taskSolved1) }}> Решить задачу</button>
            <Fade left big>
              <Text>
                <ul>
                  <li>Решение задач из разных категорий, где подтверждением успешного прохождения задания есть флаг</li>
                  <br></br>
                  <li>Продолжительность: от часа до нескольких дней</li>
                  <br></br>
                  <li>Легко организовать</li>
                </ul>
              </Text>
            </Fade>
          </Grid>


          <Grid>
            <StyledDiv>
              {taskSolved2 ?
                <GiPointySword size={170} className="sword" /> :
                <GiPointySword size={170} />
              }
            </StyledDiv>

            {taskSolved2 === true && <Fade><Solved><Alert variant="outlined" severity="success"><span className="GreenText">Атака прошла успешно! Вы получили очки</span></Alert></Solved></Fade>}
            <button className="Button1" onClick={() => { settaskSolved2(!taskSolved2) }}> Атаковать </button>
            <Fade right>
              <Text>
                <ul>
                  <li>Командам выдается сервер, который на протяжении всего соревнования
                    участники должны корректно поддерживать его работу и захватывать флаги чужых команд</li>
                  <br></br>
                  <li>Совсем не подходит для начинающих</li>
                  <br></br>
                  <li>Продолжительность: от 4 часов до нескольких дней</li>
                  <br></br>
                  <li>Сложно организовать</li>
                </ul>
              </Text>
            </Fade>
          </Grid>
        </BlackTheme>

        <Fade>
          <BigInfoBlock id="games_format">
            <Text>Есть ежегодные конференции, посвященные новостям и активностям, связанным с CTF и самое интересное,
              что их количество увеличивается в геометрической прогрессии. Некоторые из них закрытые, а некоторые доступны для всех желающих.
              Про мероприятия вы найдете информацию чуть ниже, а здесь покажем крупные соревнования в России  </Text>
          </BigInfoBlock>
        </Fade>
        <Fade right>
          <Fle>
            <Grid className="f">
              <Avatar alt="RuCTF" src="https://yarsec.ru/upload/iblock/7f0/7f03c3f4923ce6a020343be7095d9514.jpg" sx={{ width: 200, height: 200 }} />
              <p>Крупное соревнование по информационной безопасности, организованное Хакердомом с 2008</p>
            </Grid>
            <Grid className="f">
              <Avatar alt="Кубок CTF" src="https://sbergraduate.ru/wp-content/uploads/2020/11/CTF.jpg" sx={{ width: 200, height: 200 }} />
              <p>Ежегодное масштабное соревнование, где лучшая команда получит Кубок CTF России</p>
            </Grid>
            <Grid className="f" >
              <Avatar alt="InnoCTF" src="https://static.tildacdn.com/tild6237-3436-4861-a165-353131306636/image_2022-03-15_19-.png" sx={{ width: 200, height: 200 }} />
              <p>На базе Innopolis University проводятся InnoCTF Junior с 2018. Может давать дополнительные баллы при поступлении в ВУЗы </p>
            </Grid>
            <Grid className="f" >
              <Avatar alt="Tinkoff CTF" src="https://ctf.tinkoff.ru/assets/arts/hero-bg.svg" sx={{ width: 200, height: 200 }} />
              <p > Летом 2023 прошло первое CTF соревнование от Tinkoff </p>
            </Grid>
          </Fle>
        </Fade>
        <Fade left big>
          <Fle>
            <Grid className="f" >
              <Avatar alt="UgraCTF" src="https://ctfnews.ru/uploads/files/cGWOsYyurS8.jpg" sx={{ width: 200, height: 200 }} />
              <p >Популярное соревнование для всех возрастов, сделанное командой [team Team] </p>
            </Grid>
            <Grid className="f" >
              <Avatar alt="Всерос" src="https://spb-pansion.mil.ru/upload/site192/document_news/pC7OY0H87q.jpg" sx={{ width: 200, height: 200 }} />
              <p > С 2022 года на ВСЕРОСе в разделе "Технология" появился новый раздел — Информационная безопасность </p>
            </Grid>
            <Grid className="f" >
              <Avatar alt="НТО" src="https://sun6-22.userapi.com/s/v1/if1/7b3pTa3PLwxWTDNthutJL9Bt0-ASVzxoP0scAdMrCzRtX2uznJ2LUFvvPrH8kN9KzK0hFOF4.jpg?size=2101x2101&quality=96&crop=2,30,2101,2101&ava=1" sx={{ width: 200, height: 200 }} />
              <p > Национальная технологическая олимпиада(НТО) рассчитана для школьников, и дает баллы при поступлении. Организовано НИЯУ МИФИ </p>
            </Grid>
            <Grid className="f" >
              <Avatar alt="M*CTF" src="https://ctftime.org/media/events/MCTF_blue.jpg" sx={{ width: 200, height: 200 }} />
              <p >M*CTF Соревнования CTF от Московского Технического Университета Связи и Информатики(МТУСИ) для школьников и студентов </p>
            </Grid>
          </Fle>
        </Fade>

        <ImageGallery items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={true}
        />
      </ContainerBody>
      <BlackBlackTheme>
        <BlackTheme2 className="gif" id="info_point">
          <Fade right>
            <WhiteText>Ну вот и все, {UserInput}. Это был краткий экскурс в CTF, а здесь ты можешь
              ознакомиться подробнее с материалами
            </WhiteText>
          </Fade>
          <Grid
            container
            direction="row"
            alignItems="center"
            className="items"
          >
            <Grid item xs={6}>
              <motion.h5
                layout
                data-isOpen={isOpen1}
                className="experiment"
                onClick={() => setIsOpen1(!isOpen1)}
                transition={{ stiffness: 200, damping: 10 }}
              >{isOpen1 ?
                <WhiteText>Перейдя в этот раздел ты найдешь множество сайтов с задачами, видео,
                  и другие материалы, по которым можешь обучаться
                  <br></br>
                  <br></br>
                  <MenuBookIcon fontSize="large" onClick={play4} />
                </WhiteText> :
                <Title>Учебные сайты</Title>
                }
              </motion.h5></Grid>

            <Grid item xs={6}>
              <motion.h5
                layout
                data-isOpen={isOpen2}
                className="experiment"
                onClick={() => setIsOpen2(!isOpen2)}
                transition={{ stiffness: 200, damping: 10 }}
              >{isOpen2 ?
                
                <WhiteText>Этот сайт создан для краткого ознакомления с CTF. Более
                  подробно ты можешь изучить его на нашем Stepik курсе
                  <br></br>
                  <br></br>
                   <SchoolIcon fontSize="large" onClick={play3}/>
                </WhiteText>
                :
                <Title>Курс на Stepik</Title>
                }
              </motion.h5>
            </Grid>

            <Grid item xs={6}>
              <motion.h5
                layout
                data-isOpen={isOpen3}
                className="experiment"
                onClick={() => setIsOpen3(!isOpen3)}
                transition={{ stiffness: 200, damping: 10 }}
              >{isOpen3 ?
                <WhiteText>В этом разделе ты найдешь Российские соревнования/конференции,
                  а так же популярные CTF из других стран.
                  <br></br>
                  <br></br>
                  <PlayCircleOutlineIcon fontSize="large" onClick={play2}/>
                </WhiteText> :
                <Title>Соревнования</Title>
                }
              </motion.h5>
            </Grid>

            <Grid item xs={6}>
              <motion.h5
                layout
                data-isOpen={isOpen4}
                className="experiment"
                onClick={() => setIsOpen4(!isOpen4)}
                transition={{ stiffness: 200, damping: 10 }}
              >{isOpen4 ?
                <WhiteText>
                  Тут можешь пройти маленький тестик
                  <br></br>
                  <br></br>
                  <Link to='/test'><QuizIcon fontSize="large" style={{color: '#fff'}}/></Link>
                </WhiteText> :
                <Title>Тест</Title>
                }
              </motion.h5>
            </Grid>
          </Grid>
          <KeyboardDoubleArrowUpIcon onClick={handlerScrollUp} className="upButton" fontSize="large" />
        </BlackTheme2>
      </BlackBlackTheme>
    </>
  )
}
export default Body;