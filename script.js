let click = 0;
let c = 0;
let r = 0;
function turn(id) {
    c = id.cellIndex; 
    let once = id.innerHTML;
    let player = click % 2;   
    if (once == 0) {
        if (player == 0) {
            id.style.backgroundColor = "white";
            id.innerHTML = 1;
            click = click + 1;
        } else {
            id.style.backgroundColor = "black";
            id.innerHTML = 2;
            click = click + 1;
        }     
    }
}
function color1(id) {
    let once = id.innerHTML;
    let player = click % 2;
    if (once == 0) {
        if (player == 0) {
            id.style.backgroundColor = "white";
        } else {
            id.style.backgroundColor = "black";
        }     
    }
}
function color2(id) {
    let once = id.innerHTML;
    let player = click % 2;
    if (once == 0) {
        id.style.backgroundColor = "transparent";     
    }
}
function row(id) {
    r = id.rowIndex;
}
function horizontal(id) {
    if (c == 0) {
        let r1 = id.rows[r].cells[c].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        let r4 = id.rows[r].cells[c+3].innerHTML;
        let r5 = id.rows[r].cells[c+4].innerHTML;
        if (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5) {
            if (r1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 1) {
        let r1 = id.rows[r].cells[c].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        let r4 = id.rows[r].cells[c+3].innerHTML;
        let r5 = id.rows[r].cells[c+4].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        if (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5 || r1 == r2 && r1 == r3 && r1 == r4 && r1 == l2) {
            if (r1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 2) {
        let r1 = id.rows[r].cells[c].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        let r4 = id.rows[r].cells[c+3].innerHTML;
        let r5 = id.rows[r].cells[c+4].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        if (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5 || r1 == r2 && r1 == r3 && r1 == l2 && r1 == l3) {
            if (r1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 3) {
        let r1 = id.rows[r].cells[c].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        let r4 = id.rows[r].cells[c+3].innerHTML;
        let r5 = id.rows[r].cells[c+4].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        let l4 = id.rows[r].cells[c-3].innerHTML;
        if (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5 || r1 == r2 && r1 == l2 && r1 == l3 && r1 == l4) {
            if (r1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c >= 4 && c <= 10) {
        let r1 = id.rows[r].cells[c].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        let r4 = id.rows[r].cells[c+3].innerHTML;
        let r5 = id.rows[r].cells[c+4].innerHTML;
        let l1 = id.rows[r].cells[c].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        let l4 = id.rows[r].cells[c-3].innerHTML;
        let l5 = id.rows[r].cells[c-4].innerHTML;
        if ((r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5) || (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5 || r1 == r2 && r1 == r3 && r1 == r4 && r1 == l2) || (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5 || r1 == r2 && r1 == r3 && r1 == l2 && r1 == l3) || (r1 == r2 && r1 == r3 && r1 == r4 && r1 == r5 || r1 == r2 && r1 == l2 && r1 == l3 && r1 == l4) || (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5) || (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5 || l1 == l2 && l1 == l3 && l1 == l4 && l1 == r2) || (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5 || l1 == l2 && l1 == l3 && l1 == r2 && l1 == r3) || (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5 || l1 == l2 && l1 == r2 && l1 == r3 && l1 == r4)) {
            if (r1 == 1 || l1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 11) {
        let l1 = id.rows[r].cells[c].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        let l4 = id.rows[r].cells[c-3].innerHTML;
        let l5 = id.rows[r].cells[c-4].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        let r4 = id.rows[r].cells[c+3].innerHTML;
        if (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5 || l1 == l2 && l1 == r2 && l1 == r3 && l1 == r4) {
            if (l1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 12) {
        let l1 = id.rows[r].cells[c].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        let l4 = id.rows[r].cells[c-3].innerHTML;
        let l5 = id.rows[r].cells[c-4].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        let r3 = id.rows[r].cells[c+2].innerHTML;
        if (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5 || l1 == l2 && l1 == l3 && l1 == r2 && l1 == r3) {
            if (l1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 13) {
        let l1 = id.rows[r].cells[c].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        let l4 = id.rows[r].cells[c-3].innerHTML;
        let l5 = id.rows[r].cells[c-4].innerHTML;
        let r2 = id.rows[r].cells[c+1].innerHTML;
        if (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5 || l1 == l2 && l1 == l3 && l1 == l4 && l1 == r2) {
            if (l1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (c == 14) {
        let l1 = id.rows[r].cells[c].innerHTML;
        let l2 = id.rows[r].cells[c-1].innerHTML;
        let l3 = id.rows[r].cells[c-2].innerHTML;
        let l4 = id.rows[r].cells[c-3].innerHTML;
        let l5 = id.rows[r].cells[c-4].innerHTML;
        if (l1 == l2 && l1 == l3 && l1 == l4 && l1 == l5) {
            if (l1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    }
}
function vertical(id) {
     if (r == 0) {
        let d1 = id.rows[r].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        let d4 = id.rows[r+3].cells[c].innerHTML;
        let d5 = id.rows[r+4].cells[c].innerHTML;
        if (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5) {
            if (d1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 1) {
        let d1 = id.rows[r].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        let d4 = id.rows[r+3].cells[c].innerHTML;
        let d5 = id.rows[r+4].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        if (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5 || d1 == d2 && d1 == d3 && d1 == d4 && d1 == u2) {
            if (d1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 2) {
        let d1 = id.rows[r].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        let d4 = id.rows[r+3].cells[c].innerHTML;
        let d5 = id.rows[r+4].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        if (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5 || d1 == d2 && d1 == d3 && d1 == u2 && d1 == u3) {
            if (d1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 3) {
        let d1 = id.rows[r].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        let d4 = id.rows[r+3].cells[c].innerHTML;
        let d5 = id.rows[r+4].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        let u4 = id.rows[r-3].cells[c].innerHTML;
        if (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5 || d1 == d2 && d1 == u2 && d1 == u3 && d1 == u4) {
            if (d1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r >= 4 && r <= 10) {
        let d1 = id.rows[r].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        let d4 = id.rows[r+3].cells[c].innerHTML;
        let d5 = id.rows[r+4].cells[c].innerHTML;
        let u1 = id.rows[r].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        let u4 = id.rows[r-3].cells[c].innerHTML;
        let u5 = id.rows[r-4].cells[c].innerHTML;
        if ((d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5) || (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5 || d1 == d2 && d1 == d3 && d1 == d4 && d1 == u2) || (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5 || d1 == d2 && d1 == d3 && d1 == u2 && d1 == u3) || (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5 || d1 == d2 && d1 == u2 && d1 == u3 && d1 == u4) || (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5) || (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5 || u1 == u2 && u1 == u3 && u1 == u4 && u1 == d2) || (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5 || u1 == u2 && u1 == u3 && u1 == d2 && u1 == d3) || (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5 || u1 == u2 && u1 == d2 && u1 == d3 && u1 == d4)) {
            if (d1 == 1 || u1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 11) {
        let u1 = id.rows[r].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        let u4 = id.rows[r-3].cells[c].innerHTML;
        let u5 = id.rows[r-4].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        let d4 = id.rows[r+3].cells[c].innerHTML;
        if (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5 || u1 == u2 && u1 == d2 && u1 == d3 && u1 == d4) {
            if (u1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 12) {
        let u1 = id.rows[r].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        let u4 = id.rows[r-3].cells[c].innerHTML;
        let u5 = id.rows[r-4].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        let d3 = id.rows[r+2].cells[c].innerHTML;
        if (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5 || u1 == u2 && u1 == u3 && u1 == d2 && u1 == d3) {
            if (u1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 13) {
        let u1 = id.rows[r].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        let u4 = id.rows[r-3].cells[c].innerHTML;
        let u5 = id.rows[r-4].cells[c].innerHTML;
        let d2 = id.rows[r+1].cells[c].innerHTML;
        if (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5 || u1 == u2 && u1 == u3 && u1 == u4 && u1 == d2) {
            if (u1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 14) {
        let u1 = id.rows[r].cells[c].innerHTML;
        let u2 = id.rows[r-1].cells[c].innerHTML;
        let u3 = id.rows[r-2].cells[c].innerHTML;
        let u4 = id.rows[r-3].cells[c].innerHTML;
        let u5 = id.rows[r-4].cells[c].innerHTML;
        if (u1 == u2 && u1 == u3 && u1 == u4 && u1 == u5) {
            if (u1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    }
}
function slanted1(id) {
    if (r == 14 && c <= 10) {
        let ur1 = id.rows[r].cells[c].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let ur3 = id.rows[r-2].cells[c+2].innerHTML;
        let ur4 = id.rows[r-3].cells[c+3].innerHTML;
        let ur5 = id.rows[r-4].cells[c+4].innerHTML;
        if (ur1 == ur2 && ur1 == ur3 && ur1 == ur4 && ur1 == ur5) {
            if (ur1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 13 && c <= 11) {
        let ur1 = id.rows[r].cells[c].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let ur3 = id.rows[r-2].cells[c+2].innerHTML;
        let ur4 = id.rows[r-3].cells[c+3].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        if (ur1 == ur2 && ur1 == ur3 && ur1 == ur4 && ur1 == dl2) {
            if (ur1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 12 && c <= 12) {
        let ur1 = id.rows[r].cells[c].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let ur3 = id.rows[r-2].cells[c+2].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let dl3 = id.rows[r+2].cells[c-2].innerHTML;
        if (ur1 == ur2 && ur1 == ur3 && ur1 == dl2 && ur1 == dl3) {
            if (r1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 11 && c <= 13) {
        let ur1 = id.rows[r].cells[c].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let dl3 = id.rows[r+2].cells[c-2].innerHTML;
        let dl4 = id.rows[r+3].cells[c-3].innerHTML;
        if (ur1 == ur2 && ur1 == dl2 && ur1 == dl3 && ur1 == dl4) {
            if (r1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r >= 4 && r <= 10 && c >= 4 && c <= 10) {
        let ur1 = id.rows[r].cells[c].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let ur3 = id.rows[r-2].cells[c+2].innerHTML;
        let ur4 = id.rows[r-3].cells[c+3].innerHTML;
        let ur5 = id.rows[r-4].cells[c+4].innerHTML;
        let dl1 = id.rows[r].cells[c].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let dl3 = id.rows[r+2].cells[c-2].innerHTML;
        let dl4 = id.rows[r+3].cells[c-3].innerHTML;
        let dl5 = id.rows[r+4].cells[c-4].innerHTML;
        if ((ur1 == ur2 && ur1 == ur3 && ur1 == ur4 && ur1 == ur5) || (ur1 == ur2 && ur1 == ur3 && ur1 == ur4 && ur1 == dl2) || (ur1 == ur2 && ur1 == ur3 && ur1 == dl2 && ur1 == dl3) || (ur1 == ur2 && ur1 == dl2 && ur1 == dl3 && ur1 == dl4) || (dl1 == dl2 && dl1 == ur2 && dl1 == ur3 && dl1 == ur4) || (dl1 == dl2 && dl1 == dl3 && dl1 == ur2 && dl1 == ur3) || (dl1 == dl2 && dl1 == dl3 && dl1 == dl4 && dl1 == ur2) || (dl1 == dl2 && dl1 == dl3 && dl1 == dl4 && dl1 == dl5)) {
            if (ur1 == 1 || dl1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 0 && c >= 4) {
        let dl1 = id.rows[r].cells[c].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let dl3 = id.rows[r+2].cells[c-2].innerHTML;
        let dl4 = id.rows[r+3].cells[c-3].innerHTML;
        let dl5 = id.rows[r+4].cells[c-4].innerHTML;
        if (dl1 == dl2 && dl1 == dl3 && dl1 == dl4 && dl1 == dl5) {
            if (dl1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 1 && c >= 3) {
        let dl1 = id.rows[r].cells[c].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let dl3 = id.rows[r+2].cells[c-2].innerHTML;
        let dl4 = id.rows[r+3].cells[c-3].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        if (dl1 == dl2 && dl1 == dl3 && dl1 == dl4 && dl1 == ur2) {
            if (dl1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 2 && c >= 2) {
        let dl1 = id.rows[r].cells[c].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let dl3 = id.rows[r+2].cells[c-2].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let ur3 = id.rows[r-2].cells[c+2].innerHTML;
        if (dl1 == dl2 && dl1 == dl3 && dl1 == ur2 && dl1 == ur3) {
            if (dl1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 3 && c >= 1) {
        let dl1 = id.rows[r].cells[c].innerHTML;
        let dl2 = id.rows[r+1].cells[c-1].innerHTML;
        let ur2 = id.rows[r-1].cells[c+1].innerHTML;
        let ur3 = id.rows[r-2].cells[c+2].innerHTML;
        let ur4 = id.rows[r-3].cells[c+3].innerHTML;
        if (dl1 == dl2 && dl1 == ur2 && dl1 == ur3 && dl1 == ur4) {
            if (dl1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    }
}
function slanted2(id) {
    if (r == 14 && c >= 4) {
        let ul1 = id.rows[r].cells[c].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let ul3 = id.rows[r-2].cells[c-2].innerHTML;
        let ul4 = id.rows[r-3].cells[c-3].innerHTML;
        let ul5 = id.rows[r-4].cells[c-4].innerHTML;
        if (ul1 == ul2 && ul1 == ul3 && ul1 == ul4 && ul1 == ul5) {
            if (ul1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 13 && c >= 3) {
        let ul1 = id.rows[r].cells[c].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let ul3 = id.rows[r-2].cells[c-2].innerHTML;
        let ul4 = id.rows[r-3].cells[c-3].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        if (ul1 == ul2 && ul1 == ul3 && ul1 == ul4 && ul1 == dr2) {
            if (ul1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 12 && c >= 2) {
        let ul1 = id.rows[r].cells[c].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let ul3 = id.rows[r-2].cells[c-2].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let dr3 = id.rows[r+2].cells[c+2].innerHTML;
        if (ul1 == ul2 && ul1 == ul3 && ul1 == dr2 && ul1 == dr3) {
            if (ul1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 11 && c >= 1) {
        let ul1 = id.rows[r].cells[c].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let dr3 = id.rows[r+2].cells[c+2].innerHTML;
        let dr4 = id.rows[r+3].cells[c+3].innerHTML;
        if (ul1 == ul2 && ul1 == dr2 && ul1 == dr3 && ul1 == dr4) {
            if (ul1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r >= 4 && r <= 10 && c >= 4 && c <= 10) {
        let ul1 = id.rows[r].cells[c].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let ul3 = id.rows[r-2].cells[c-2].innerHTML;
        let ul4 = id.rows[r-3].cells[c-3].innerHTML;
        let ul5 = id.rows[r-4].cells[c-4].innerHTML;
        let dr1 = id.rows[r].cells[c].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let dr3 = id.rows[r+2].cells[c+2].innerHTML;
        let dr4 = id.rows[r+3].cells[c+3].innerHTML;
        let dr5 = id.rows[r+4].cells[c+4].innerHTML;
        if ((ul1 == ul2 && ul1 == ul3 && ul1 == ul4 && ul1 == ul5) || (ul1 == ul2 && ul1 == ul3 && ul1 == ul4 && ul1 == dr2) || (ul1 == ul2 && ul1 == ul3 && ul1 == dr2 && ul1 == dr3) || (ul1 == ul2 && ul1 == dr2 && ul1 == dr3 && ul1 == dr4) || (dr1 == dr2 && dr1 == ul2 && dr1 == ul3 && dr1 == ul4) || (dr1 == dr2 && dr1 == dr3 && dr1 == ul2 && dr1 == ul3) || (dr1 == dr2 && dr1 == dr3 && dr1 == dr4 && dr1 == ul2) || (dr1 == dr2 && rl1 == dr3 && dr1 == dr4 && dr1 == dr5)) {
            if (ul1 == 1 || dr1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 0 && c <= 10) {
        let dr1 = id.rows[r].cells[c].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let dr3 = id.rows[r+2].cells[c+2].innerHTML;
        let dr4 = id.rows[r+3].cells[c+3].innerHTML;
        let dr5 = id.rows[r+4].cells[c+4].innerHTML;
        if (dr1 == dr2 && rl1 == dr3 && dr1 == dr4 && dr1 == dr5) {
            if (dr1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 1 && c <= 11) {
        let dr1 = id.rows[r].cells[c].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let dr3 = id.rows[r+2].cells[c+2].innerHTML;
        let dr4 = id.rows[r+3].cells[c+3].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        if (dr1 == dr2 && dr1 == dr3 && dr1 == dr4 && dr1 == ul2) {
            if (dr1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 2 && c <= 12) {
        let dr1 = id.rows[r].cells[c].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let dr3 = id.rows[r+2].cells[c+2].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let ul3 = id.rows[r-2].cells[c-2].innerHTML;
        if (dr1 == dr2 && dr1 == dr3 && dr1 == ul2 && dr1 == ul3) {
            if (dr1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    } else if (r == 3 && c <= 13) {
        let dr1 = id.rows[r].cells[c].innerHTML;
        let dr2 = id.rows[r+1].cells[c+1].innerHTML;
        let ul2 = id.rows[r-1].cells[c-1].innerHTML;
        let ul3 = id.rows[r-2].cells[c-2].innerHTML;
        let ul4 = id.rows[r-3].cells[c-3].innerHTML;
        if (dr1 == dr2 && dr1 == ul2 && dr1 == ul3 && dr1 == ul4) {
            if (dr1 == 1) {
                alert("Player One Wins");
            } else {
                alert("Player Two Wins");
            }
        }
    }
}