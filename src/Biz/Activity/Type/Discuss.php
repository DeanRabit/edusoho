<?php

namespace Biz\Activity\Type;

use Biz\Activity\Config\Activity;

class Discuss extends Activity
{
    protected function registerListeners()
    {
        return array(
            'discuss.finish' => 'Biz\\Discuss\\Listener\\DiscussFinishListener'
        );
    }

    public function isFinished($activityId)
    {
        return true;
    }

    protected function getListeners()
    {
        return array();
    }
}
