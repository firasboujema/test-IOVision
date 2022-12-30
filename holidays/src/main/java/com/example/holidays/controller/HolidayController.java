package com.example.holidays.controller;

import com.example.holidays.persistence.entity.*;
import com.example.holidays.service.*;
import com.example.holidays.vo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/holiday")
public class HolidayController {
    @Autowired
    private HolidayService holidayService;

    @GetMapping(value = "/findAll")
    public List<HolidayVo> findAll() {
        return holidayService.findAll();

    }
    @PostMapping(value = "/createHoliday")
    @ResponseBody
    public void createHoliday(@RequestBody HolidayVo holidayVo){
        holidayService.createHoliday(holidayVo);
    }
    @PutMapping(value = "/update/{id}")
    public void updateHoliday(@PathVariable Long id,@RequestBody HolidayVo holidayVo){
        holidayService.updateHoliday(id, holidayVo);
    }
    @DeleteMapping(value = "/deleteHoliday/{id}")
    public void deleteHoliday(@PathVariable Long id){
        holidayService.deleteHoliday(id);

    }

    @GetMapping("/getHoliday/{id}")
    @ResponseBody
    public Holiday getCandidatById(@PathVariable("id") Long id) {
        return holidayService.getHolidatById(id);
    }



}
