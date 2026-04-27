package com.example.app06.api.request; import jakarta.validation.constraints.NotBlank; public record CreateCourseRequest(@NotBlank String name, @NotBlank String status) {}
