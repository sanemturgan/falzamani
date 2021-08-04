import React from "react";
import classes from "../styles/burcdetay.module.css";
import ZodiacImgthree from "../public/img/burcdty.png";
import { Input } from "@chakra-ui/react";
import { FaSearch, FaSortDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function burcdetay() {
  return (
    <div className="burcdetay">
      <div className={classes.burchdr}>
        <h4>BURÇLAR</h4>
      </div>
      <div className={classes.search}>
        <div className={classes.srchi}>
          <Link href="/search">
            <a>
              <FaSearch color="#281c3b" size="16px" />
            </a>
          </Link>
        </div>
        <Input variant="unstyled" placeholder="Ara" />
      </div>
      <div className={classes.detaymain}>
        <div className={classes.dtyrght}>
          <div className={classes.dtyimg}>
            <Image src={ZodiacImgthree} alt="dty" />
          </div>
          <div className={classes.dtyexp}>
            <h4>Terazi Burcu Aylık Burç Yorumları - Temmuz 2021</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              nunc sed blandit libero volutpat sed. Euismod elementum nisi quis
              eleifend quam. Ut consequat semper viverra nam libero. Velit
              aliquet sagittis id consectetur purus ut faucibus. Neque laoreet
              suspendisse interdum consectetur libero id faucibus nisl. Nisl
              nişi scelerisque eu ultrices. At risus viverra adipiscing at in
              tellus. Volutpat diam ut venenatis tellus. Sagittis orci a
              scelerisque purus. <br />
              Lectus proin nibh nisl condimentum id venenatis a condimentum
              vitae. Aliquam ut porttitor leo a diam. Amet consectetur
              adipiscing elit pellentesque habitant morbi tristique. Dolor purus
              non enim praesent elementum facilisis. Eleifend quam adipiscing
              vitae proin sagittis. Eros in cursus turpis massa tincidunt dui
              ut. Metus vulputate eu scelerisque felis. Magnis dis parturient
              montes nascetur ridiculus mus mauris vitae. Vel facilisis volutpat
              est velit egestas dui id ornare. Turpis massa sed elementum
              tempus. Ultricies lacus sed turpis tincidunt id aliquet risus
              feugiat in. Cursus euismod quis viverra nibh cras pulvinar mattis.
              Odio ut enim blandit volutpat maecenas volutpat blandit aliquam.
              Placerat vestibulum lectus mauris ultrices eros in cursus turpis.
              Pretium fusce id velit ut tortor. Rhoncus dolor purus non enim
              praesent elementum facilisis leo. Eget est lorem ipsum dolor sit
              amet consectetur. <br />
              Rhoncus urna neque viverra justo nec ultrices dui sapien eget.
              Nisi porta lorem mollis aliquam. Pellentesque pulvinar
              pellentesque habitant morbi tristique. Vitae congue mauris rhoncus
              aenean. Sit amet consectetur adipiscing elit. At in tellus integer
              feugiat scelerisque varius. Proin nibh nisl condimentum id
              venenatis a condimentum vitae sapien. Ipsum faucibus vitae aliquet
              nec ullamcorper sit. Orci nulla pellentesque dignissim enim sit
              amet. Gravida in fermentum et sollicitudin ac orci phasellus
              egestas tellus. Turpis nunc eget lorem dolor sed viverra ipsum
              nunc aliquet. Urna duis convallis convallis tellus. Eu facilisis
              sed odio morbi quis commodo. Leo duis ut diam quam. Dictumst
              quisque sagittis purus sit amet volutpat consequat mauris nunc.
              Sed elementum tempus egestas sed sed risus pretium quam. Duis
              ultricies lacus sed turpis tincidunt. Nulla porttitor massa id
              neque aliquam vestibulum morbi blandit cursus. Ipsum faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam. Porta lorem
              mollis aliquam ut porttitor leo.
            </p>
          </div>
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.fldr}>Genel</li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Kahve Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Tarot Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Su Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Katina Aşk Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>İskambil Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>DuruGörü</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Yıldızname</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Venüs Burcu</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burcdetay">
                <a>Mars Burcu</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default burcdetay;
