package com.example.holidays.service.impl;

import com.example.holidays.persistence.entity.*;
import com.example.holidays.persistence.repository.*;
import com.example.holidays.service.*;
import com.example.holidays.vo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class HolidayServiceImpl implements HolidayService {
    @Autowired
    private BasicRepositoryUser basicRepositoryUser;

    @Override
    public List<HolidayVo> findAll() {
        List<HolidayVo> res = new ArrayList<>();

        List<Holiday> userList = (List<Holiday>) basicRepositoryUser.findAll();

        for (Holiday u : userList) {
            HolidayVo newUser = new HolidayVo();
            newUser.setId(u.getId());
            newUser.setFirstName(u.getFirstName());
            newUser.setLastName(u.getLastName());
            newUser.setEmail(u.getEmail());
            newUser.setTel(u.getTel());
            newUser.setDate_deb(u.getDate_deb());
            newUser.setDate_fin(u.getDate_fin());
            res.add(newUser);
        }

        return res;
    }

    @Override
    public void createHoliday(HolidayVo holidayVo) {
        Holiday newUser = new Holiday();
        newUser.setFirstName(holidayVo.getFirstName());
        newUser.setLastName(holidayVo.getLastName());
        newUser.setEmail(holidayVo.getEmail());
        newUser.setTel(holidayVo.getTel());
        newUser.setDate_deb(holidayVo.getDate_deb());
        newUser.setDate_fin(holidayVo.getDate_fin());
        basicRepositoryUser.save(newUser);

    }

    @Override
    public void updateHoliday(Long id, HolidayVo holidayVo) {
        if (basicRepositoryUser.findById(id).isPresent()) {
            Holiday u = basicRepositoryUser.findById(id).get();
            u.setFirstName(holidayVo.getFirstName());
            u.setLastName(holidayVo.getLastName());
            u.setEmail(holidayVo.getEmail());
            u.setTel(holidayVo.getTel());
            u.setDate_deb(holidayVo.getDate_deb());
            u.setDate_fin(holidayVo.getDate_fin());
            basicRepositoryUser.save(u);
        }
    }

    @Override
    public void deleteHoliday(Long id) {
        if (basicRepositoryUser.existsById(id)) {
            basicRepositoryUser.deleteById(id);
        }
    }

    @Override
    public Holiday getHolidatById(Long id) {
        return basicRepositoryUser.findById(id).get();
    }
}
