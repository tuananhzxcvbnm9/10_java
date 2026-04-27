package com.example.app10.api.controller;

import com.example.app10.api.request.CreateMetricRequest;
import com.example.app10.application.dto.MetricDto;
import com.example.app10.application.mapper.MetricMapper;
import com.example.app10.application.service.MetricService;
import com.example.app10.domain.entity.Metric;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/metrics", "/api/v1/metrics"})
public class MetricController {
  private final MetricService service;

  public MetricController(MetricService service) {
    this.service = service;
  }

  @GetMapping
  public List<MetricDto> list() {
    return service.list().stream().map(MetricMapper::toDto).toList();
  }

  @PostMapping
  public MetricDto create(@Valid @RequestBody CreateMetricRequest req) {
    Metric e = new Metric();
    e.setName(req.name());
    e.setStatus(req.status());
    return MetricMapper.toDto(service.create(e));
  }
}
