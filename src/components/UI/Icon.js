/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  RiHome2Fill,
  RiStarFill,
  RiStarLine,
  RiUserHeartFill,
  RiGitRepositoryFill,
  RiGitBranchLine,
  RiSearchFill,
  RiCodeBoxFill,
} from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const icons = {
  home: RiHome2Fill,
  star: RiStarFill,
  starLine: RiStarLine,
  followers: HiUserGroup,
  following: RiUserHeartFill,
  repos: RiGitRepositoryFill,
  gists: RiCodeBoxFill,
  github: AiFillGithub,
  gitfork: RiGitBranchLine,
  search: RiSearchFill,
  previous: GrFormPrevious,
  next: GrFormNext,
};

function Icon({ type, color, size }) {
  const SelectedIcon = icons[type];
  const baseCSS = css`
    fill: ${color};
    font-size: ${size}px;
    polyline {
      stroke: ${color};
    }
  `
  return <SelectedIcon css={baseCSS}/>
}

export default Icon;
