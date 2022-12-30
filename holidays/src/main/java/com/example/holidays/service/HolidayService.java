package com.example.holidays.service;

import com.example.holidays.persistence.entity.*;
import com.example.holidays.vo.*;

import java.util.*;

public interface HolidayService {
    List<HolidayVo> findAll();

    void createHoliday(HolidayVo holidayVo);

    void updateHoliday(Long id, HolidayVo holidayVo);

    void deleteHoliday(Long id);

    Holiday getHolidatById(Long id);
}
