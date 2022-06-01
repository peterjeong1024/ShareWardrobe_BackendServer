<?php

// MariaDB [swdb]> desc UserAccount; 
// +----------+--------------+------+-----+---------+-------+
// | Field    | Type         | Null | Key | Default | Extra |
// +----------+--------------+------+-----+---------+-------+
// | UserID   | varchar(20)  | NO   | PRI | NULL    |       |
// | UserPW   | varchar(100) | NO   |     | NULL    |       |
// | UserName | varchar(20)  | NO   |     | NULL    |       |
// +----------+--------------+------+-----+---------+-------+

class UserAccount  {
    private $UserID;
    private $UserPW;
    private $UserName;

    //getter
    function getUserID()
    {
        return $this->UserID;
    }

    function getUserPW()
    {
        return $this->UserPW;
    }

    function getUserName()
    {
        return $this->UserName;
    }

    //setter
    function setUserID(int $UserID)
    {
        $this->UserID = $UserID;
    }

    function setUserPW(string $UserPW)
    {
        $this->UserPW = $UserPW;
    }

    function setUserName(int $UserName)
    {
        $this->UserName = $UserName;
    }
}

?>