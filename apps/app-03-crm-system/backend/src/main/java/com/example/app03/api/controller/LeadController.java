package com.example.app03.api.controller;

import com.example.app03.api.request.CreateLeadRequest;
import com.example.app03.application.dto.LeadDto;
import com.example.app03.application.mapper.LeadMapper;
import com.example.app03.application.service.LeadService;
import com.example.app03.domain.entity.Lead;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/leads", "/api/v1/leads"})
public class LeadController {
  private final LeadService service;

  public LeadController(LeadService service) {
    this.service = service;
  }

  @GetMapping
  public List<LeadDto> list() {
    return service.list().stream().map(LeadMapper::toDto).toList();
  }

  @PostMapping
  public LeadDto create(@Valid @RequestBody CreateLeadRequest req) {
    Lead e = new Lead();
    e.setName(req.name());
    e.setStatus(req.status());
    return LeadMapper.toDto(service.create(e));
  }
}
