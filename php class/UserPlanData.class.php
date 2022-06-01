<?php

// MariaDB [swdb]> desc UserPlanData; 
// +------------------+------------------+------+-----+---------+----------------+
// | Field            | Type             | Null | Key | Default | Extra          |
// +------------------+------------------+------+-----+---------+----------------+
// | UserPlanDataID   | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
// | UserID           | varchar(20)      | NO   | MUL | NULL    |                |
// | FItemsSerialize  | varchar(100)     | YES  |     | NULL    |                |
// | OutFitsSerialize | varchar(100)     | YES  |     | NULL    |                |
// +------------------+------------------+------+-----+---------+----------------+

class UserPlanData
{
    private $UserPlanDataID;
    private $UserID;
    private $FItemsSerialize;
    private $OutFitsSerialize;

    //getter
    function getUserPlanDataID()
    {
        return $this->UserPlanDataID;
    }

    function getUserID()
    {
        return $this->UserID;
    }

    function getFItemsSerialize()
    {
        return $this->FItemsSerialize;
    }

    function getOutFitsSerialize()
    {
        return $this->OutFitsSerialize;
    }

    //setter
    function setUserPlanDataID(int $UserPlanDataID)
    {
        $this->UserPlanDataID = $UserPlanDataID;
    }

    function setUserID(int $UserID)
    {
        $this->UserID = $UserID;
    }

    function setFItemsSerialize(string $FItemsSerialize)
    {
        $this->FItemsSerialize = $FItemsSerialize;
    }

    function setOutFitsSerialize(string $OutFitsSerialize)
    {
        $this->OutFitsSerialize = $OutFitsSerialize;
    }
}
